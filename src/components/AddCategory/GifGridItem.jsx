// Developed by @ciucol
// 02/10/2021
import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
export default GifGridItem
