/* eslint-disable react/no-deprecated */
import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (

  <div className='search'>
    <input
      type='search'
      placeholder='digite nome do user no github'
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired

}
