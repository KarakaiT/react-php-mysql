import React from "react";
import '../Css/Order.css';
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Order(){

  const navigate = useNavigate();
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

      axios.post('http://localhost:80/gyakor/order.php', inputs).then(function(response){ //!!!!! átirni

          console.log(response.data);
          navigate('/')
      });
      
  }
  

    return(
        <div className="order">

            <div className="rendel">
                <form  onSubmit={handleSubmit} /*enctype="multipart/form-data"*/>
                    <h2>Rendelés elküldése</h2>
                    
                    <label htmlFor="">Vezetéknév:</label>
                    <input type="text" name="vez_nev" id="" onChange={handleChange} /*value={data.vez_nev}*//>

                    <label htmlFor="">Keresztnév:</label>
                    <input type="text" name="ker_nev" id="" onChange={handleChange} /*value={data.ker_nev}*//>

                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" id="" onChange={handleChange} /*value={data.email}*//>

                    <label htmlFor="">Telefonszám:</label>
                    <input type="text" name="tel" id="" onChange={handleChange} /*value={data.tel}*//>

                    <label htmlFor="">Rendelés leírása</label>
                    <textarea name="leir" id="" cols="30" rows="10" onChange={handleChange} /*value={data.leir}*/></textarea>

                    <button type="submit" class="megrendeles">Rendelés leadása</button>
                    </form>
                </div>

        </div>
    )
}

