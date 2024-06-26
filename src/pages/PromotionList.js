import React, { useState }  from 'react';
import usePromotions from '../hooks/usePromotions.js';
import '../styles/List.css';
import { useNavigate } from 'react-router-dom';
import NewPromotionPopup from '../components/NewPromotionPopup';

function PromotionList() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { loading, error, data } = usePromotions();

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('Getting Promotions:', { error, loading, data});

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRowClick = (id) => {
    navigate(`/promotions/${id}`);
  };

  return (
    <div className="main-container">
      <h1 className="title">Promotion List</h1>
      <div className="function-row">
        <div className="func-button" onClick={openPopup}>Create New Promotion</div>
      </div>
      <div className="promotions-table">
        <div className="promotions-header">
          <div className="header-item">ID</div>
          <div className="header-item">Company</div>
          <div className="header-item">Promotion Budget</div>
          <div className="header-item">Start Date</div>
          <div className="header-item">End Date</div>
        </div>
        <div className="table-content">
          {data.promotions.map(promotion => (
            <div 
              key={promotion.id} 
              className="promotion-row"
              onClick={() => handleRowClick(promotion.id)}
            >
              <div className="table-data">{promotion.id}</div>
              <div className="table-data">{promotion.company}</div>
              <div className="table-data">{promotion.promotion_budget.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}</div>
              <div className="table-data">{promotion.start_date_time}</div>
              <div className="table-data">{promotion.end_date_time}</div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <NewPromotionPopup onClose={closePopup} />}
    </div>
    
  );
}

export default PromotionList;