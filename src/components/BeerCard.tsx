import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price } = beerData;

  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
    </li>
  )
}