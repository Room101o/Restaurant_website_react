import React, { useState } from 'react';
import Panier from './Panier';

const ProductItem = ({ name, price }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckout = (quantity) => {
    // Gérez la logique de la commande ici avec la quantité sélectionnée
    console.log(`Checkout for ${name} with Quantity: ${quantity}`);
    setShowModal(false);
  };

  return (
    <>
      <div className="product-item">
        <p>Price: ${price}</p>
        <button className='btn-addtocart' onClick={handleShowModal}>Add to Cart</button>
      </div>

      {/* Afficher la modal pour chaque produit avec le prix du produit */}
      <Panier show={showModal} onClose={handleCloseModal} onCheckout={handleCheckout} productPrice={price} />
    </>
  );
};

export default ProductItem;
