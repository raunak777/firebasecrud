import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
const GetData = ({ useCollection, Added }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollection);
            // console.log(data.docs);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, [Added, useCollection]);
    return (
        <>
            {users.map(user => {
                const { name, age, id } = user;
                return (
                    <div key={id}>
                        <h2>Name: {name}</h2>
                        <h2>Age: {age}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default GetData