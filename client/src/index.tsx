import React from "react";
import { createRoot } from "react-dom/client";
import { App } from './components/app/app';
import { Setting } from "./consts";
import {offers} from  './mocks/offers'

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    
    root.render(
        <React.StrictMode>
            <App
                rentalOffersCount={Setting.rentOfferCount}
                offers = {offers}
            />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found!");
}