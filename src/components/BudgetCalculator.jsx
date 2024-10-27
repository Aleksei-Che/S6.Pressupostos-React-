// components/BudgetCalculator.jsx
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

function BudgetCalculator() {
  const [services, setServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (service) => {
    const newServices = { ...services, [service]: !services[service] };
    setServices(newServices);

    const newTotal =
      (newServices.seo ? 300 : 0) +
      (newServices.ads ? 400 : 0) +
      (newServices.web ? 500 : 0);
    setTotalPrice(newTotal);
  };

  return (
    <div className="services-container">
      <div className="cards-wrapper">
        <ServiceCard
          serviceName="SEO"
          description="Programació d'una web responsive completa"
          price={300}
          checked={services.seo}
          onChange={() => handleCheckboxChange('seo')}
        />
        <ServiceCard
          serviceName="Ads"
          description="Programació d'una web responsive completa"
          price={400}
          checked={services.ads}
          onChange={() => handleCheckboxChange('ads')}
        />
        <ServiceCard
          serviceName="Web"
          description="Programació d'una web responsive completa"
          price={500}
          checked={services.web}
          onChange={() => handleCheckboxChange('web')}
        />
      </div>
      <div className="total-price">
        <h3>Preu pressupostat: {totalPrice} €</h3>
      </div>
    </div>
  );
}

export default BudgetCalculator;
