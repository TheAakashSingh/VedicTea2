import React from "react";

const ProductCard = ({ title, img, description, price, marginTopDescription }) => {
  const handleClickBuy = async () => {
    const stripe = await window.Stripe("pk_test_51NKQmXSFk8uv1auK9NITkHnQ542wo6Y2c3UDmZWDRhb0AStcTiM1oF3RAE6PICaFScRg6DvPb4yRvZjOjegHxs4k00HlIRY0Td");

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price, quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-card">
      <div>
        <div className="image-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="content-wrapper">
          <div className="title">{title}</div>
          <div className="description" style={{ marginTop: marginTopDescription }}>
            {description}
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="price">
          {price}/-<span className="quantity">one pack</span>
        </div>
        <button onClick={handleClickBuy}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductCard;
