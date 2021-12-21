import { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";

const AlePage: NextPage = () => {
    const name = 'ale';
    const { data, error } = useBeerData(name);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <article>
            <h2>Ale Page</h2>
            <main>
                {data.map((beerData: Beer) => {
                    return (
                        <BeerCard
                            key={`ale-beer-list-${beerData.id}`}
                            beerData={beerData}
                        />
                    )
                })}
            </main>
        </article>
    );
};

export default AlePage;