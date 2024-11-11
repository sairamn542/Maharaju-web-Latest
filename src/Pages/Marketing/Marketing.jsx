import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './marketing.css';

const DigitalMarketingPage = () => {
  const cardsData = [
    { id: 1, title: "Digital Marketing", text: "Digital marketing uses digital channels to reach targeted audiences, drive brand growth, and boost online engagement.", logo: "https://cdn-icons-png.flaticon.com/128/8118/8118287.png" },
    { id: 2, title: "Internet Marketing", text: "Internet marketing uses online platforms to promote products and services effectively.", logo: "https://cdn-icons-png.flaticon.com/128/5757/5757635.png" },
    { id: 3, title: "Content Marketing", text: "Content marketing involves creating valuable content to engage and retain target audiences.", logo: "https://cdn-icons-png.flaticon.com/128/12067/12067648.png" },
    { id: 4, title: "Social Media Marketing", text: "Promotes brands on social platforms to enhance visibility and engagement.", logo: "social-media.png" },
    { id: 5, title: "B2B Marketing", text: "B2B marketing emphasizes building relationships between businesses for mutual growth.", logo: "https://cdn-icons-png.flaticon.com/128/11722/11722232.png" },
    { id: 6, title: "E-mail Marketing", text: "Engage customers and nurture leads through targeted email campaigns.", logo: "https://cdn-icons-png.flaticon.com/128/10401/10401061.png" }
  ];

  return (
    <div className="digital-marketing-page">
      {/* Header Section */}
      <div className="header-image">
        <h1>Digital Marketing</h1>
      </div>

      {/* Image and Description Section */}
      <div className="row description-section">
        <div className="col-md-6 image-container">
          <img src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png" alt="Digital Marketing Insight" className="description-image" />
        </div>
        <div className="col-md-6 description-text">
          <h2>Digital Marketing</h2>
          <p style={{color : 'black'}}>Digital Marketing involves online strategies like SEO, social media marketing, and content marketing to reach target audiences and drive growth.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container card-section">
        <h2>Digital Marketing Services</h2>
        <div className="row">
          {cardsData.map((card) => (
            <div key={card.id} className="col-md-4 col-sm-6">
              <div className="card2">
                <img src={card.logo} alt={card.title} className="card-logo" />
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
