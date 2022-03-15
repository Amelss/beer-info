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
    
  const handleClick = (e) => {
    e.preventDefault();
    getBeers();
  };
  
  return (
    <div className="px-5 py-10">
      <div className="bg-slate-100 rounded shadow-md pb-5 md:mx-96 ">
        {beerData.map((beers) => (
          <div key={id}>
            <div className="block md:flex">
              <h1 className="text-center text-1xl py-4 md:hidden">
                {beers.name}
              </h1>
              <img
                src={beers.image_url}
                alt="beer"
                className="h-44 mx-auto md:h-80 md:pt-7 px-10"
              />
              <div>
                <h1 className="hidden md:block text-3xl py-4 px-3">
                  {beers.name}
                </h1>
                <p className="pt-5 text-xs px-3 md:text-sm">
                  Tagline: {beers.tagline}
                </p>
                <p className="pt-3 text-xs text-gray-500 px-3 ">
                  First Brew Date: {beers.first_brewed}
                </p>
                <p className="mt-1 text-sm px-3 font-light md:text-sm">
                  {beers.description}
                </p>
                <p className="mt-1 text-sm px-3 font-light md:text-sm">
                  <span className="font-medium">ABV:</span> {beers.abv}
                </p>
                <p className="mt-1 px-3">Ingredients:</p>
                <p className="mt-1 text-sm px-3 font-light">
                  {beers.ingredients.malt[0].name}
                </p>
                <p className="mt-1 text-sm px-3 font-light">
                  {beers.ingredients.malt[0].amount.value}
                </p>
                <p className="mt-1 text-sm px-3 font-light">
                  {beers.ingredients.malt[0].amount.unit}
                </p>
                <p className="mt-1 px-3">Food Pairings:</p>
                <p className="mt-1 text-sm px-3 font-light">
                  {" "}
                  - {beers.food_pairing[0]}
                </p>
                <p className="mt-1 text-sm px-3 font-light">
                  {" "}
                  - {beers.food_pairing[1]}
                </p>
                <p className="mt-1 text-sm px-3 font-light">
                  {" "}
                  - {beers.food_pairing[2]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
          <div className='flex justify-center mt-10'>
      <button
        onClick={handleClick}
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
      >
        Click For Another Beer{" "}
      </button>
      </div>
    </div>
  );
}

