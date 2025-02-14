import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const [one,setOne] = useState({})
  
  const location = useLocation()
  let id = location.pathname.split('/')[location.pathname.split('/').length -1]
 
  useEffect(()=>{
    axios(`http://localhost:5002/newArrivalsDB/${id}`)
    .then(({data})=>setOne(data))
  },[])
  


  return (
    <main>
      <section className='oneProduct'>
        <div className="container">
            <h2>oneProduct</h2>
            <h3>{one.title}</h3>
            <img src={one.image} alt="" />
            
        </div>
      </section>
    </main>
  )
}

export default Detail
