import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() 
{
  const [dog, setdog] = useState ({message : '', status : ''});

  useEffect (() =>
  {
    /*alert ('Hello world !'); */
    getData();
  }, [])

  async function getData()
  {
    const res = await fetch ('https://dog.ceo/api/breeds/image/random');
    const data = await res.json ();
    console.log (data);
    setdog (data);
  }
  const [msg, setmsg] = useState ('Marvellous Infosystems');
  const [btn, setbtn] = useState ('Subscribe');
  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={()=>{setmsg ('Welocome To Marvellous Infosystems Family .'); setbtn ('Subscribed')}}>{btn}</button>
    <div className='imagecontainer'>
      <img src = {dog.message} alt = 'dog' style={{width : '60%', borderRadius : '60px'}}/>
    </div>
    </div>
  );
}

export default App;
