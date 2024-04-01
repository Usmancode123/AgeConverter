
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  function App() {
    const [birth ,setBirth]=useState('')
    const [age, setAge] = useState(0)
  
    const calculateAge=()=>{
      const today = new Date()
      // console.log(today);
      const birthDay =new Date(birth)
  
      let age = today.getFullYear( ) - birthDay.getFullYear()
   setAge(age);
    }
  
  
    const resetAge=()=>{
      setBirth("");
      setAge(0)
    }
    return (
      <>
     <div className='container'>
  
  <h1 className='h1-1'>Age Calculator</h1>
  
  <div className='container-date'>
  
  
  
    {/* left container  */}
    <div className='left'>
      <p>Date of Birth</p>
    <input type='date' value={birth} onChange={e=>setBirth(e.target.value)}/>
  
    <br />
    <br />
    <br />
    <div className='btn'>
    <button onClick={calculateAge}>Calculate Age</button>
    <button onClick={resetAge}>Reset</button>
    </div>
    
    </div>
  
  
  {/* right container  */}
    <div className='right'>
      <p>Your Age is </p>
      <h1>{age > 0 ?`${age}`:0}</h1>
    </div>
  </div>
     </div>
         
      </>
    )
}


export default App
