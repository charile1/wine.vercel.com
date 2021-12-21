import type { NextPage } from "next";

const WinePage: NextPage = () => {
  return (
    <div>
      <h1>Wines</h1>
      <ul>
        <li><a href="wines/port">Port</a></li>
        <li><a href="wines/reds">Reds</a></li>
        <li><a href="wines/rose">Rose</a></li>
        <li><a href="wines/sparkling">Sparkling</a></li>
        <li><a href="wines/whites">Whites</a></li>
        <li><a href="wines/dessert">dessert</a></li>
      </ul>
    </div>
  )
}

export default WinePage; 