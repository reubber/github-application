/* eslint-disable react/no-deprecated */
import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (

  <div className='user-info'>

    <img src={userinfo.photo} />
    <h1>
      <a href={`https://api.github.com/users/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className='repos-info'>
      <li> Repositorios: {userinfo.repos}</li>
      <li> Seguidores: {userinfo.seguidores}</li>
      <li> Seguindo: {userinfo.seguindo}</li>
    </ul>
  </div>

)
UserInfo.propTypes = {

  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    seguidores: PropTypes.number.isRequired,
    seguindo: PropTypes.number.isRequired

  })
}
export default UserInfo
