import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';

// Components
import {Nav} from '../components/common/nav/Nav';
import {SpecialCardDetails} from '../components/homepage/main/specials/Special-details-card';

// Styles
import '../styles/global.css';
import './SpecialDetailspage.css';

export const SpecialDetailsPage = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);
        // get a single document (special)
        projectFirestore.collection('specials').doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    setIsPending(false);
                    setData(doc.data())
                } else {
                    setIsPending(false);
                    setError('Could not find that special');
                }
            }).catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [id])
    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <div className="SpecialDetailsContainer">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <SpecialCardDetails
                name={data.name}
                price={data.price}
                image={data.image}
                description={data.description}
                ingredients={data.ingredients}
                />
            }
        </div>
    </>
    )
}