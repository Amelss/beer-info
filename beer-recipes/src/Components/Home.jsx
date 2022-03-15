import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


export default function Home( ) {
  
  const [beerData, setBeerData] = useState([]);
  const { id } = useParams();

  

  const getBeers = async () => {
    await axios
      .get(`https://api.punkapi.com/v2/beers/random`)
      .then((res) => {
        setBeerData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleClick = (e) => {
    e.preventDefault() 
    getBeers()
  }

  return (
    <div className='px-5 py-10'>
      <div className="bg-slate-100 rounded shadow-md pb-5 md:mx-96">
        {beerData.map((beers) => (
          <div key={id}>
            <h1 className='text-center pt-5'>{beers.name}</h1>
            <img
              src={beers.image_url}
              alt="beer"
              className="h-44 mx-auto md:h-80 pt-3 md:pt-7 px-10"
            />
            <p className="pt-5 text-xs px-3 text-gray-500 md:text-sm">
              Tagline: {beers.tagline}
            </p>
          </div>
        ))}
        <Link to={`recipe-card`}><button className='mx-auto'>View More Info</button></Link>
      </div>
      <button onClick={handleClick}>Click For Another Beer </button>
    </div>
  );
}
