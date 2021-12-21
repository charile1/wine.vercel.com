import type { NextPage } from "next";

const BeerPage: NextPage = () => {
  return (
    <div>
      <h1>Beers Page</h1>
      <ul>
        <li><a href="beers/ale">Ale</a></li>
        <li><a href="beers/stouts">Stouts</a></li>
        {/* <li><a href="beers/red-ale">Red-ale</a></li> */}
      </ul>
    </div>
  )
}

export default BeerPage;