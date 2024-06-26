import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreatePromotion from '../hooks/useCreatePromotion';
import '../styles/Popup.css';

const NewPromotionPopup = ({ onClose }) => {
  const [company, setCompany] = useState('');
  const [promotionBudget, setPromotionBudget] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  const navigate = useNavigate(); 

  const { addPromotion } = useCreatePromotion();

  const handleSubmit = async () => {
    try {
      const { data } = await addPromotion({
        company,
        promotion_budget: parseFloat(promotionBudget),
        start_date_time: startDateTime,
        end_date_time: endDateTime,
      });
      const newPromotionId = data.addPromotion.id; 
      onClose();
      navigate(`/promotions/${newPromotionId}`);

    } catch (error) {
      console.error('Error creating promotion:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Create New Promotion</h2>
        <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="text" placeholder="Promotion Budget" value={promotionBudget} onChange={(e) => setPromotionBudget(e.target.value)} />
        <input type="text" placeholder="Start Date Time" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} />
        <input type="text" placeholder="End Date Time" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} />
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NewPromotionPopup;