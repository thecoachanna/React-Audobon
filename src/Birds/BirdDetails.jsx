import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BirdDetails = (props) => {
  const params = useParams()

  const [bird, setBird] = useState({});
    
    useEffect(() => { 
    fetch(`https://audubon-api.herokuapp.com/api/birds/${params.id}`)
      .then((res) => res.json())
        .then((json) => {
        setBird(json);
      })
      .catch(console.error);
  }, [params.id]);
    
  return (
    <div className="details-container">
      <img
        src={bird.image}
        alt={bird.name}
    />
    <div className="details">
      <h2>{bird.name}</h2>
      <h3>{bird.genus}</h3>
      <h4>Conservation Status</h4>
      <p>{bird.conservationStatus}</p>
      
      <a
        href={bird.homepage}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  </div>
  )
}

export default BirdDetails  