// Developed by @ciucol
// 02/10/2021
import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img className="animate__animated animate__fadeIn" src={url} alt={title} />
      <p className="animate__animated animate__jackInTheBox">{title}</p>
    </div>
  )
}
export default GifGridItem
