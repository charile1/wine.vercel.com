import type { NextPage } from "next";
import { WineCardList } from "../../components/WineCardList";

const RedsWinePage: NextPage = () => {
  const name = 'reds';

  return (
    <div>
      WineCardList name={name}
    </div>
  )
}

export default RedsWinePage;