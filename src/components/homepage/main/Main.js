import React from "react";
import './Main.css';

import {Specials} from './specials/Specials';
import {Testimonials} from './testimonials/Testimonials';
import {History} from './history/History';

export const Main = () => {

    return (
        <main className="Main">
             <section className="Specials">
                <Specials/>
            </section>
            <section className="Testimonials">
                <Testimonials/>
            </section>
            <section className="History">
                <History/>
            </section>
        </main>
    )
}
