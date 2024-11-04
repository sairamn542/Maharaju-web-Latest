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
                    <div>Instant health report over 16+ health parameters</div>
                    <div>QR Based Health Card</div>
                    <div>Advance Analytics dashboard for Impact Analysis</div>
                    <div>Instant Health Reports on WhatsApp, SMS & email along with printout</div>
                </div>
            </div>
            <div className="features-col">
                <div className='features-content-box'>
                    <div>Video call between doctor and patients with instant prescription</div>
                    <div>Instant ECG reporting</div>
                    <div>AI powered personalized Indian meal plan</div>
                    <div>Maintain Patient Medical Record with Complete data security</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
