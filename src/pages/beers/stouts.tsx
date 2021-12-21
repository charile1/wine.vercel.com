import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";


const Stouts: NextPage = () => {
  const name = 'stouts';
  const { data, error } = useBeerData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard key={`${name}-beer-list-${beerData.id}`} beerData={beerData} />
          )
        })}
      </ul>
    </article>
  )
}


export default Stouts;