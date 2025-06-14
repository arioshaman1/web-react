import {MainPage} from "../../pages/main-page/main-page";
import {Favorites} from "../../pages/favorites/favorites";
import {Login} from "../../pages/login/login";
import {Offer} from "../../pages/offer/offer";
import {NotFound} from "../not-found/notfound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {JSX} from "react";
import {AppRoute, AuthorizationStatus} from "../../consts";
import {PrivateRoute} from "../private-route/private-route";
import {FullOffer} from "../../types/offer";
// import PrivateRoute from "../../components/private-route/private-route"; // Новый компонент

// Добавляем типы для пропсов
type AppMainPageProps = {
    rentalOffersCount: number;
    offers: FullOffer[]; // Тип из types/offer.ts
    // offersList: OfferList[]; // Тип из types/offer.ts
};

function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={
                        <MainPage
                            rentalOffersCount={rentalOffersCount}
                            // offersList={offersList}
                        />
                    }
                />
                <Route path={AppRoute.Login} element={<Login/>}/>
                <Route
                    path={AppRoute.Favorites}
                    element={
                      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                        <Favorites />
                      </PrivateRoute>
                    }
                />
                {/*<Route path={AppRoute.Offer} element={<Offer offers={offers}/>}/>*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export {App};
