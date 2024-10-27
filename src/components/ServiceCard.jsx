import React from "react";

function ServiceCard({ serviceName, description, price, checked, onChange }){
    return (
        <div className={`card ${checked ? 'selected' : ''}`}>
            <div className="card-content">
                <h3>{serviceName}</h3>
                <p className="description">{description}</p>
            </div>
            <p className="price">{price} €</p>
            <div className="checkbox-container">
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                 />
                <label>Afegir</label>
            </div>
        </div>
    );
}

export default ServiceCard