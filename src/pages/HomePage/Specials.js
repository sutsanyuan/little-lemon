
import Button from "../../components/common/Button";
import MenuCard from "../../components/common/MenuCard";
import useFetch from "../../hooks/useFetch";

import { fetchSpecials } from "../../data/specialsData";

export default function Specials() {

    const {data:items, loading} = useFetch(fetchSpecials);

 return (
        <section className="menu-section">
            <div className="container">
                <div className="row">
                    <h3 className="display-title">This weeks specials!</h3>
                    <Button backgroundColor="primary-lemon">Online Menu</Button>
                </div>

                <div className="menu-wrapper">
                    {loading? <p>loading data...</p>:items.map((dish) => (
                        <MenuCard
                            key={dish.id}
                            image={dish.image}
                            title={dish.title}
                            price={dish.price}
                            description={dish.description}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}
