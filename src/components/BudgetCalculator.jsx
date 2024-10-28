// components/BudgetCalculator.jsx
import React, { useReducer } from 'react';
import ServiceCard from './ServiceCard';
import WebOptions from './WebOptions'

function BudgetCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div className="services-container">
      <div className="cards-wrapper">
        <ServiceCard
          serviceName="SEO"
          description="Programació d'una web responsive completa"
          price={300}
          checked={state.services.seo}
          onChange={() => dispatch({type: "TOGGLE_SERVICE", payload: 'seo'})}
        />
        <ServiceCard
          serviceName="Ads"
          description="Programació d'una web responsive completa"
          price={400}
          checked={services.ads}
          onChange={() => dispatch({type: "TOGGLE_SERVICE", payload: 'ads'})}
        />
        <ServiceCard
          serviceName="Web"
          description="Programació d'una web responsive completa"
          price={500}
          checked={services.web}
          onChange={() => dispatch({type: "TOGGLE_SERVICE", payload: 'web'})}
        />

        {state.service.web && (
          <WebOptions 
            pages={state.pages}
            languages={state.languages}
            onPageChange={(newPages) => dispatch({ type: "SET_PAGES", payload: newPages })}
            onLanguagesChange={(newLanguages) => dispatch({type: "SET_LANGUAGES", payload: newLanguages})}
          />
        )}
      </div>
      <div className="total-price">
        <h3>Preu pressupostat: {totalPrice} €</h3>
      </div>
    </div>
  );
}

export default BudgetCalculator;
