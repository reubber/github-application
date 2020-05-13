import React from 'react'

const Actions = ({ getRepos, getStarred }) => (

  <div className='actions'>
    <button onClick={getRepos}>ver Repos</button>
    <button onClick={getStarred}>Stars</button>
  </div>

)

export default Actions
