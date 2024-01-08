
import React from "react";

// Custom Hooks
import { useCollection } from "../../../../hooks/useCollection";

// Styles
import './Specials.css';

// Components
import { Card } from './Special-card';

export const Specials = () => {
    const query = ['isSpecial', '==', true];
    // Fetch specials
    const {data,isPending,error} = useCollection('products', query);
    return (
        <>
            <section className="SpecialsHeaderContainer">
                <h2 className="title">This week's Specials!</h2>
            </section>
            <section className="SpecialsContentContainer">
                <div className="SpecialsContentArticleContainer">
                    {error && <p>{error}</p>}
                    {isPending && <p>Loading...</p>}
                    {data && data.map((special) => (
                        <Card
                            key={special.id}
                            id={special.id}
                            name={special.name}
                            price={special.price}
                            image={special.image}
                            description={special.description}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}