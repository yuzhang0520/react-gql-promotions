import React from 'react';
import useInfluencers from '../hooks/useInfluencers.js';
import '../styles/List.css';
import { useNavigate } from 'react-router-dom';

function InfluencerList() {
  const { loading, error, data } = useInfluencers();

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('Getting Influencers:', { error, loading, data});

  const handleRowClick = (id) => {
    navigate(`/influencers/${id}`);
  };

  return (
    <div className="main-container">
      <h1 className="title">Influencer List</h1>
      <div className="influencers-table">
        <div className="influencers-header">
          <div className="header-item">ID</div>
          <div className="header-item">Name</div>
          <div className="header-item">Email</div>
          <div className="header-item">Social Media Links</div>
        </div>
        <div className="table-content">
          {data.influencers.map(influencer => (
            <div 
              key={influencer.id} 
              className="influencer-row"
              onClick={() => handleRowClick(influencer.id)}>
              <div className="table-data">{influencer.id}</div>
              <div className="table-data">{influencer.name}</div>
              <div className="table-data">{influencer.email}</div>
              <div className="table-data social-media-links">
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
    </div>
  );
}

export default InfluencerList;