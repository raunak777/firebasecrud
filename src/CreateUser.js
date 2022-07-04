import React, {useState} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "./firebase-config";
import GetData from './GetData';
const CreateUser = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [added, setAdded] = useState(false);
    const useCollection = collection(db, "users");

    const createUser = async () => {
        const data = await addDoc(useCollection, {name: name, age: age});
        if(data){
            setAdded(true);
            setName("");
            setAge(0);
        }
    }
    return (
        <div>
            <input type="text" placeholder="Name...." onChange={(e) => setName(e.target.value)} value={name} />
            <input type="number" placeholder="Age...." onChange={(e) => setAge(e.target.value)} value={age} />
            <button type="button" onClick={createUser} >Create User</button>
            <GetData useCollection={useCollection} Added={added}/>
        </div>
    )
}

export default CreateUser