import React from 'react';
import './careerfooter.css';

function CareeerFooter() {
  return (
    <div className="career-footer">
      <div className="career-footer__whoWeAre">
        <h2 className="career-footer__whoWeAreTitle">Who We Are</h2>
        <p className="career-footer__whoWeAreText">
          At <b>Maharaju Healthcare Technologies</b>, we are passionate about bringing together human expertise and advanced technologies to help 
          enterprises drive digital transformation, optimize critical business operations, reinvent experiences, and pioneer 
          new solutions. For more than three decades, we have partnered with iconic brands worldwide, unlocking new 
          possibilities, transformative outcomes, and enduring relationships through market-leading technology and business 
          process excellence. Discover exciting career opportunities with us and be part of a vibrant global community that 
          is transforming the digital landscape globally.
        </p>
      </div>

      {/* Life at MHC Section with Three Horizontal Boxes */}
      <div className="career-footer__lifeAtMHC">
        <h2 className="career-footer__lifeAtMHCHeading">Life At MRHC</h2>

        <div className="career-footer__boxes">
          <div className="career-footer__box">
            <img 
              src="https://wallpapercave.com/wp/wp10181832.jpg" 
              alt="Our Mission" 
              className="career-footer__boxImage"
            />
            <h3 className="career-footer__boxTitle">Solve Interesting Business Problems</h3>
            <p className="career-footer__boxText">
              If you want to solve real-world problems with innovative solutions for some of the world’s biggest brands, this is your chance to learn, grow, and make an impact.
            </p>
          </div>
          <div className="career-footer__box">
            <img 
              src="https://planergy.com/wp-content/uploads/2020/09/504-Featured-What-Is-The-Impact-Of-AI-On-Your-Business.jpg" 
              alt="Our Vision" 
              className="career-footer__boxImage"
            />
            <h3 className="career-footer__boxTitle">Grow Your Own Way</h3>
            <p className="career-footer__boxText">
              Discover your passion and create your own career path. From leading teams to exploring new industries, we’ll ensure you have the tools, guidance and support you need to thrive.
            </p>
          </div>
          <div className="career-footer__box">
            <img 
              src="https://st5.depositphotos.com/4678277/63268/i/450/depositphotos_632687112-stock-photo-photo-web-designer-software-expert.jpg" 
              alt="Join Us" 
              className="career-footer__boxImage"
            />
            <h3 className="career-footer__boxTitle">Be Yourself</h3>
            <p className="career-footer__boxText">
              Your unique qualities and interests make us stronger. We celebrate diversity and encourage everyone to bring their authentic selves to work every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareeerFooter;
