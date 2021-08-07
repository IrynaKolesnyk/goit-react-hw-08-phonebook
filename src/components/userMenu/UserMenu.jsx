import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/defaultAvatar.png';
import { logOut } from '../../redux/auth/auth-operations';
import UserMenuStyled from './UserMenuStyled';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <UserMenuStyled>
      <img src={avatar} width="30px" alt={name} />
      <h3>Welcome, {name}</h3>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </UserMenuStyled>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
