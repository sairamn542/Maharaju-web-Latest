import React from 'react'
import './feature.css'

function Features() {
  return (
    <div className='features-section'>
        <div className='features-heading'>Features</div>
        <div className="features-row">
            <div className="features-col">
                <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZWVyfGVufDB8fDB8fHww" width={200} alt="" />
            </div>
            <div className="features-col">
                <div className='features-content-box'>
                    <div>Web development</div>
                    <div>Mobile development</div>
                    <div>Cloud solutions</div>
                    <div>Database management</div>
                    <div>E-commerce Solutions</div>
                    <div>Data Analytics and business Intelligence</div>
                </div>
            </div>
            <div className="features-col">
                <div className='features-content-box'>
                    <div>A.i and machine learning</div>
                    <div>Cyber security</div>
                    <div>UI/UX design</div>
                    <div>Devops</div>
                    <div>API Development and Integration</div>
                    <div>Training and Support</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
