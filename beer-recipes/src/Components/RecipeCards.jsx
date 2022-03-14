import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function RecipeCards() {

    const [beerData, setBeerData] = useState([])
    const {id} = useParams()

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
        getBeers()
       
    }, []);
    
  
  return (
    <div>
      <div className="bg-white rounded shadow pb-5">
        {beerData.map((beers) => (
          <div key={id}>
            <h1 className="text-center text-1xl py-4">{beers.name}</h1>
            <img
              src={beers.image_url}
              alt="beer"
              className="h-44 object-fill  mx-auto"
            />
            <p className="pt-5 text-xs px-3">Tagline: {beers.tagline}</p>
            <p className="pt-3 text-xs text-gray-500 px-3">
              First Brew Date: {beers.first_brewed}
            </p>
            <p className="mt-1 text-sm px-3 font-light">{beers.description}</p>
                <p className="mt-1 text-sm px-3 font-light"><span className='font-medium'>ABV:</span> {beers.abv}</p>
                <p className='mt-1 px-3'>Ingredients:</p>
                <p className="mt-1 text-sm px-3 font-light">{beers.ingredients.malt[0].name}</p>
                <p className="mt-1 text-sm px-3 font-light">{beers.ingredients.malt[0].amount.value}</p>
                <p className="mt-1 text-sm px-3 font-light">{beers.ingredients.malt[0].amount.unit}</p>
                <p className='mt-1 px-3'>Food Pairings:</p>
                <p className="mt-1 text-sm px-3 font-light"> - {beers.food_pairing[0]}</p>
                <p className="mt-1 text-sm px-3 font-light"> - {beers.food_pairing[1]}</p>
                <p className="mt-1 text-sm px-3 font-light"> - {beers.food_pairing[2]}</p>


          </div>
        ))}
      </div>
    </div>
  );
}

