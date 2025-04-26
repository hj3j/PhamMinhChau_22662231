import React from 'react'

function Banner() {
  return (
    <div className="banner">
      <button className="banner-btn left">‹</button>
      <img 
        src="/banner.png" 
        alt="Banner" 
        className="banner-image" 
      />
      <button className="banner-btn right">›</button>
    </div>
  )
}

export default Banner
