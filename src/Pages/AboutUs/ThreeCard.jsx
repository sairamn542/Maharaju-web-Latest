import React from "react";
import "./threec.css";

const ThreeCards = () => {
    const cardData = [
        { 
            title: "Data Management", 
            content: "We provide insights through data analysis and ensure data integrity for informed decision-making.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/iki-thumbnail.png",
            bgColor: "#4CAF50" 
        },
        { 
            title: "User Support", 
            content: "We offer responsive technical support to ensure our colleagues can work efficiently and without interruption.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-fund-thumbnail.png",
            bgColor: "#F44336" 
        },
        { 
            title: "Help Desk & Technical Support", 
            content: "Our support team ensures that our users receive prompt assistance and guidance on technical issues.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-network-thumbnail.png",
            bgColor: "#FFEB3B" 
        },
    ];

    return (
        <div className="container">
            <div className="grid">
                {cardData.map((card, index) => (
                    <div className="card1-container" key={index} style={{ transitionDelay: `${index * 200}ms` }}>
                        <div className="card1" style={{ backgroundColor: card.bgColor }}>
                            <span className="hover-effect" />
                            <div className="card1-content">
                                <h2 className="card1-title">{card.title}</h2>
                                <p className="card1-text">{card.content}</p>
                            </div>
                            {card.image && (
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="card1-image" 
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeCards;
