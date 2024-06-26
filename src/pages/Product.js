import React from 'react'
import useProduct from '../hooks/useProduct'
import { useParams } from 'react-router'

export default function Product() {
    const { id } = useParams();
    console.log("ID form URL:", id);
    const { data, error, loading } = useProduct(id);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return null; // Render nothing if data is undefined

    console.log({
        error,
        loading,
        data
    });

    const generateRowNumbers = (dataArray) => {
        return dataArray.map((_, index) => index + 1);
    };

    return(
        <div className="main-container">
            <div className="grid-header">Product: {data.product.id}</div>
            <div className="grid-details">
                <div className="grid-details-header">
                    <div className="details-header-item">Name</div>
                    <div className="details-header-item">Description</div>
                </div>
                <div className="details-row">
                    <div className="datails-data">{data.product.name}</div>
                    <div className="datails-data">{data.product.description}</div>
                </div>
            </div>
            <div className="sub-title">Promotions</div>
            <div className="promotions-table">
                <div className="promotions-table-header">
                    <div className="sub-header-item">No.</div>
                    <div className="sub-header-item">ID</div>
                    <div className="sub-header-item">Company</div>
                    <div className="sub-header-item">Promotion Budget</div>
                    <div className="sub-header-item">Start Date Time</div>
                    <div className="sub-header-item">End Date Time</div>
                </div>
                <div className="sub-grid-content">
                    {data.product.promotions.map((promotion, index) => (
                        <div key={promotion.id} className="promotions-row">
                            <div className="sub-data">{generateRowNumbers(data.product.promotions)[index]}</div>
                            <div className="sub-data">{promotion.id}</div>
                            <div className="sub-data">{promotion.company}</div>
                            <div className="sub-data">${promotion.promotion_budget}</div>
                            <div className="sub-data">{promotion.start_date_time}</div>
                            <div className="sub-data">{promotion.end_date_time}</div>
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
                    {data.product.influencers.map((influencer, index) => (
                        <div key={influencer.id} className="influencers-row">
                            <div className="sub-data">{generateRowNumbers(data.product.influencers)[index]}</div>
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
                    {data.product.contents.map((content, index) => (
                        <div key={content.id} className="contents-row">
                            <div className="sub-data">{generateRowNumbers(data.product.contents)[index]}</div>
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

        </div>
    
    );
}
