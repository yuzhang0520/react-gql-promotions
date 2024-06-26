import React from 'react';
import '../styles/List.css';
import '../styles/Popup.css';
import useAddProductToPromotion from '../hooks/useAddProductToPromotion.js'
import useProductsNotInPromotion from '../hooks/useProductsNotInPromotion.js';

function AddProductToPromotionPopup({ onClose, promotionId }) {

  const { loading, error, data } = useProductsNotInPromotion(promotionId);
  const { addPromotionProduct } = useAddProductToPromotion();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message} promotionId{promotionId}</p>;

  console.log('Getting Products:', { error, loading, data});
  console.log('Get Promotion ID:' , promotionId );

  const handleSubmit = async (productId) => {
    try {

        await addPromotionProduct({
            promotion_id: promotionId,
            product_id: productId,
        });
        onClose();
        window.location.reload(); 

    } catch (error) {
      console.error('Error adding product to promotion:', error);
    }
  };

  return (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-button" onClick={onClose}>Close</button>
            <h2>Select Product to Promotion</h2>
            <div className="popup-products-table">
                <div className="popup-products-header">
                    <div className="header-item">ID</div>
                    <div className="header-item">Name</div>
                    <div className="header-item">Description</div>
                    <div className="header-item"></div>
                </div>
                <div className="table-content">
                  <div className="scrollable-content">
                    {data.findProductsNotInPromotion.map(product => (
                        <div key={product.id} className="product-row">
                            <div className="table-data">{product.id}</div>
                            <div className="table-data">{product.name}</div>
                            <div className="table-data">{product.description}</div>
                            <div className="table-data"><button className="btn-add" onClick={() => handleSubmit(product.id)}>Add</button></div>
                        </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AddProductToPromotionPopup;