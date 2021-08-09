import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import RegisterPageStyled from './RegisterPageStyled';
import { getErrorAuth } from '../../redux/auth/auth-selectors';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();
    console.log(this.props.onRegister);
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <RegisterPageStyled>
          <h1 className="regissterTitle">Sign Up</h1>

          <form onSubmit={this.handelSubmit}>
            {/* <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label> */}
            <TextField
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              label="Name"
              variant="outlined"
              id="outlined-basic"
              className="marginRight"
            />

            {/* <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label> */}
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              variant="outlined"
              id="outlined-basic"
              className="marginRight"
            />

            {/* <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              variant="outlined"
              id="outlined-basic"
            />
            {/* <button className="registerBtn" type="submit">
            Sign Up
          </button> */}
            <Button
              type="submit"
              className="registerBtn"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
        </RegisterPageStyled>
        {this.props.isError && (
          <h2 className="error">{this.props.isError}. Please try again</h2>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isError: getErrorAuth(state),
});

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
