import React, { useState } from "react";

// Custom Hooks
import { useCollection } from "../hooks/useCollection";

// Components
import {Nav} from '../components/common/nav/Nav';
import { Card } from "../components/homepage/main/specials/Special-card";

// Styles
import './Menupage.css';

export const MenuPage = () => {
    // Initial category is salads
    const [menu, setMenu] = useState('salad');

    // Fetch products
    const {data,isPending,error} = useCollection('products');

    const isSelected = (menuItem) => {
        return menu === menuItem ? 'MenuItemSelected' : 'MenuItem';
    };

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}>
            <div className="Products">
                <div className="ProductsHeaderContainer">
                    <h2 className="title"> Products</h2>
                </div>
                <div className="ProductsMenuListContainer">
                    <p onClick={() => setMenu('salad')} className={isSelected('salad')}>Salads</p>
                    <p onClick={() => setMenu('main')} className={isSelected('main')}>Main</p>
                    <p onClick={() => setMenu('dessert')} className={isSelected('dessert')}>Desserts</p>
                </div>
                </div>
                <div className="ProductsContentContainer">
                    <div className="ProductsContentArticleContainer">
                        {error && <p>{error}</p>}
                        {isPending && <p>Loading...</p>}
                        {data && data
                            .filter(product => product.category === menu)
                            .map((product) => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    description={product.description}
                                />
                        ))}
                    </div>
                </div>
        </div>

    </>
    )
}