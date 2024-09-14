import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div>
        <div className="subscribe-section" id='subscribe'>
            <div className="row">
                <div className="col-md-4">
                    <h4>Subscribe now & get 20% off</h4>
                    <p>Stay updated with our latest offers and promotions. Subscribe to our newsletter and enjoy an exclusive 20% discount on your next purchase.</p>
                    <input type="text" name="text" id="text" placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;