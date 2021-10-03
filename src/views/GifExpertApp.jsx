import React, { useState } from 'react'
import AddCategory from '../components/AddCategory/AddCategory'
import ImgCategory from '../components/AddCategory/ImgCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"])

  return (
    <>
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map(cat => (
            <ImgCategory
              key={cat}
              categories={cat}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp