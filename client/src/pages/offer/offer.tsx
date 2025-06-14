// src/pages/offer/offer.tsx
import { useParams } from 'react-router-dom';
import { FullOffer } from '../../types/offer';
import { Logo } from '../../components/logo/logo';

type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps) {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <div>Предложение не найдено</div>;
  }

  const {
    title,
    isPremium,
    images,
    price,
    rating,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description
  } = offer;

  return (
    <div className="page">
      <header className="header">
        ...
        <Logo /> {/* Заменяем логотип */}
        ...
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="offer__container container">
            ...
            <h1 className="offer__name">{title}</h1>
            ...
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            ...
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              ...
            </div>
            
            <div className="offer__inside">
              <h2 className="offer__inside-title">What's inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => (
                  <li key={good} className="offer__inside-item">{good}</li>
                ))}
              </ul>
            </div>
            
            <div className="offer__host">
              ...
              <span className="offer__user-name">{host.name}</span>
              {host.isPro && <span className="offer__user-status">Pro</span>}
              ...
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
            </div>
            ...
          </div>
        </section>
      </main>
    </div>
  );
}