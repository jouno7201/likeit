import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ImgUrl , setImgUrl] = useState("");

  useEffect(()=>{
    axios.get('https://api.thedogapi.com/v1/images/search',
    {
      limit: 1,
      size: "small",
      //sub_id: "demo-c9497a",
    },
    {
      headers: { 
        'Content-Type': 'application/json', 
        'x-api-key': '16aeab06-5b41-4f14-ba01-851d54f4dcb2', 
      }
    })
    .then(function (response) {
      console.log(response.data[0].url);
      setImgUrl(response.data[0].url);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  const req_Image = ()=>{
    axios.get('https://api.thedogapi.com/v1/images/search',
    {
      limit: 1,
      size: "small",
      //sub_id: "demo-c9497a",
    },
    {
      headers: { 
        'Content-Type': 'application/json', 
        'x-api-key': '16aeab06-5b41-4f14-ba01-851d54f4dcb2', 
      }
    })
    .then(function (response) {
      console.log(response.data[0].url);
      setImgUrl(response.data[0].url);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="App">
      <img width = "100%" src ={`${ImgUrl}`} alt="no img" onClick={req_Image}/>
    </div>
  );
}

export default App;
