// Developed by @ciucol
// 01/10/2021
import React from 'react'
import GifGridItem from './GifGridItem'
import useFetchGifs from '../../hooks/useFetchGifs'

const ImgCategory = ({ categories }) => {
  const { data, loading } = useFetchGifs(categories)
  return (
    <>
      <p>{categories}</p>
      {loading && <p className="animate__flash">Cargando...</p>}
      <div className="card-grid">
        {
          data.map(img => <GifGridItem
            key={img.id}
            {...img}
          />)
        }
      </div>
    </>
  )
}
export default ImgCategory
