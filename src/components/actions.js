/* eslint-disable react/no-deprecated */
import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (

  <div className='actions'>
    <button onClick={getRepos}>ver Repos</button>
    <button onClick={getStarred}>Stars</button>
  </div>

)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
