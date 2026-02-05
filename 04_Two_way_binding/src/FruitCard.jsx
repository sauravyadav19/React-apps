import "./fruitcard.css";

function FruitCard({ fruit }) {
  return (
    <div className="fruit-card">

      <div className="fruit-image">
        <img src={fruit.image} alt={`${fruit.name}'s Image`} />
      </div>

      <div className="fruit-details">

        <div className="fruit-name">
          <span className="common-name">{fruit.name}</span>
          <span className="scientific-name">({fruit.scientificName})</span>
        </div>

        <p className="fruit-description">
          {fruit.description}
        </p>

        <div className="fruit-origin">
          <strong>Native to:</strong>{" "}
          {fruit.nativeTo.join(", ")}
        </div>

        <div className="fruit-benefits">
          <strong>Benefits:</strong>
          <ul>
            {fruit.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default FruitCard;