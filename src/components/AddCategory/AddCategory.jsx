// Developed by @ciucol
// 01/10/2021
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    inputValue.trim().length > 0 && setCategories(cats => [inputValue, ...cats])
    setInputValue('')
  }
  return (
    <>
      <h3>AddCategory</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategory
