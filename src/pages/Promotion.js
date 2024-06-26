import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import { usePromotion } from "../hooks/usePromotion";
import "../styles/EndPage.css";
import AddProductToPromotionPopup from "../components/AddProductToPromotionPopup";
import useRemoveProductFromPromotion from "../hooks/useRemoveProductFromPromotion";

export default function Promotion() {

    const { id }  = useParams();
    console.log("ID from URL:", id); 

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { data, loading, error } = usePromotion(parseInt(id));

    const { removePromotionProduct } = useRemoveProductFromPromotion();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return null; // Render nothing if data is undefined

    console.log({
        error,
        loading,
        data
    });

    const openPopup = () => {
        setIsPopupOpen(true);
        console.log("setIsPopupOpen");
    };
    
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const generateRowNumbers = (dataArray) => {
        return dataArray.map((_, index) => index + 1);
    };

    const handleRemove = async (promotionId, productId) => {
        try {
            await removePromotionProduct({
                variables: {
                    promotionId,
                    productId
                }
            });
            window.location.reload(); 
        } catch (error) {
            console.error('Error removing product from promotion:', error);
        }
    };

    return(
        <div className="main-container">
            <div className="grid-header">Promotion: {data.promotion.id}</div>
            <div className="grid-details">
                <div className="grid-details-header">
                    <div className="details-header-item">Company</div>
                    <div className="details-header-item">Budge</div>
                </div>
                <div className="details-row">
                    <div className="datails-data">{data.promotion.company}</div>
                    <div className="datails-data">${data.promotion.promotion_budget}</div>
                </div>
                <div className="grid-details-header">
                    <div className="details-header-item">Start Date Time</div>
                    <div className="details-header-item">End Data Time</div>
                </div>
                <div className="details-row">
                    <div className="datails-data">{data.promotion.start_date_time}</div>
                    <div className="datails-data">{data.promotion.end_date_time}</div>
                </div>
            </div>
            <div className="sub-title">Products</div>
            <div className="function-row">
                <div className="func-button" onClick={openPopup}>Add Product</div>
            </div>
            <div className="products-table">
                <div className="products-table-header">
                    <div className="sub-header-item">No.</div>
                    <div className="sub-header-item">ID</div>
                    <div className="sub-header-item">Name</div>
                    <div className="sub-header-item">Description</div>
                    <div className="sub-header-item"></div>
                </div>
                <div className="sub-grid-content">
                    {data.promotion.products.map((product, index) => (
                        <div key={product.id} className="products-row">
                            <div className="sub-data">{generateRowNumbers(data.promotion.products)[index]}</div>
                            <div className="sub-data">{product.id}</div>
                            <div className="sub-data">{product.name}</div>
                            <div className="sub-data">{product.description}</div>
                            <div className="sub-data"><button className="btn-remove" onClick={() => handleRemove(data.promotion.id, product.id)}>Remove</button></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sub-title">Influencers</div>
            <div className="influencers-table">
                <div className="influencers-table-header">
                    <div className="sub-header-item">No.</div>
                    <div className="sub-header-item">ID</div>
                    <div className="sub-header-item">Name</div>
                    <div className="sub-header-item">Email</div>
                    <div className="sub-header-item">Link</div>
                </div>
                <div className="sub-grid-content">
                    {data.promotion.influencers.map((influencer, index) => (
                        <div key={influencer.id} className="influencers-row">
                            <div className="sub-data">{generateRowNumbers(data.promotion.influencers)[index]}</div>
                            <div className="sub-data">{influencer.id}</div>
                            <div className="sub-data">{influencer.name}</div>
                            <div className="sub-data">{influencer.email}</div>
                            <div className="sub-data social-media-links">
                                <ul>
                                    {influencer.social_media_links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link} target="_blank" rel="noopener noreferrer">
                                                Link {index + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sub-title">Contents</div>
            <div className="contents-table">
                <div className="contents-table-header">
                    <div className="sub-header-item">No.</div>
                    <div className="sub-header-item">ID</div>
                    <div className="sub-header-item">Type</div>
                    <div className="sub-header-item">Views</div>
                    <div className="sub-header-item">Likes</div>
                    <div className="sub-header-item">Comments</div>
                    <div className="sub-header-item">Creation Date Time</div>
                </div>
                <div className="sub-grid-content">
                    {data.promotion.contents.map((content, index) => (
                        <div key={content.id} className="contents-row">
                            <div className="sub-data">{generateRowNumbers(data.promotion.contents)[index]}</div>
                            <div className="sub-data">{content.id}</div>
                            <div className="sub-data">{content.content_type}</div>
                            <div className="sub-data">{content.views}</div>
                            <div className="sub-data">{content.likes}</div>
                            <div className="sub-data">{content.comments}</div>
                            <div className="sub-data">{content.creation_date_time}</div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupOpen && <AddProductToPromotionPopup onClose={closePopup} promotionId={id}/>}        
        </div>
    
    );
}