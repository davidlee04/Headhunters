import React from 'react';
import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, addDoc, doc} from "firebase/firestore";

function Form(props){
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const usersCollection = collection(db, "users");

    useEffect(() => {
        const getUsers = async() => {
            const data = await getDocs(usersCollection);
            console.log(data);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getUsers();
    });

    return (
        <div className = "Form" >
            <form>
                <label>
                    Email Address: 
                    <input type="text" value={name} />
                </label>
                <br/>
                <input className="App-submit" type="submit" value="Submit" />
            </form>
            {users.map((user)=> {
                return (
                    <div>
                        <h1>{user.name}</h1>
                    </div>
                );
            })}
            
        </div>
  );
}

export default Form;