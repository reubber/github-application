/* eslint-disable react/no-deprecated */
import React, { PropTypes } from 'react'

const Search = ({ isDisable, handleSearch }) => (

  <div className='search'>
    <input
      type='search'
      placeholder='digite nome do user no github'
      onKeyUp={handleSearch}
      disabled={isDisable}
    />
  </div>
)

export default Search

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired

}
