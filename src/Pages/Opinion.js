import React from "react";
import { useState,useEffect } from "react"
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Css/Opinion.css';

export default function Opinion() {

    //const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
         
        const name = event.target.name;
        const value = event.target.value;

        /*inputs[name] = value;
        setInputs(inputs);

        const newInputs = {};
        newInputs[name] = value;
        setInputs(Object.assign({}, inputs, newInputs));

        const newInputs = {};
        Object.keys(inputs).forEach(key=>{
            newInputs[key] = inputs[key];
        });
        newInputs[name] = value;
        setInputs(newInputs);*/


        setInputs(values =>({...values, [name]: value}));

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/gyakor/opinion.php', inputs).then(function(response){

            console.log(response.data);
            window.location.reload('/opinion');
            //navigate('/');
            getUsers();
        });
        
    }
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/gyakor/opinion.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
   

    return(
        <div className="opinion">
            <div className="opinion-left">
                <form onSubmit={handleSubmit} >
                        <h2>Ird le a véleményed!</h2>
                        <label htmlFor="">Név:</label>
                        <input type="text" name="nev" id="" onChange={handleChange}/>
                        <label htmlFor="">Tárgy:</label>
                        <input type="text" name="targy" onChange={handleChange}/>
                        <label htmlFor="">Vélemény:</label>
                        <textarea name="velemeny" id="" cols="30" rows="10" onChange={handleChange}></textarea>

                        <button type="submit" >Küldés</button>
                </form>
            </div>
                <div className="opinion-right">
                    <div className="opishow">
                        {users.map((user, key) =>
                            <tr key={key}>
                                <p>{user.nev}</p>
                                <p>{user.targy}</p>
                                <p>{user.velemeny}</p>
                            </tr>
                        )}
                    </div>
                </div>
            
        </div>
    )
}

