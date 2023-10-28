import React from 'react'
import Head from './Head'

const Card = ({data}) => {
  return (
    <div className='head'>
      <div className='head1'>
        <Head />
      </div>
      <div>
       <div className='card-contanier' >
        {
          data.map((item)=>(
          <div > 
            <div className="cards">
              <div className="title">
               <h1>{item.title}</h1>
              </div>
              <div className="date">
                <h1>{item.date}</h1></div>
                <img src= {item.image} alt="" />
              
              <div className="card-over">
                <p>{item.desc}</p>
              </div>

            </div>
           </div>
             
           
          ))
        }
</div>
      </div>

    </div>
  )
}

export default Card