import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import LoginPageStyled from './LoginPageStyled';
import { getErrorAuth } from '../../redux/error/error-selectors';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isError !== this.props.isError && this.props.isError) {
      error({
        text: this.props.isError,
        delay: 1000,
      });
      console.log(
        error({
          text: this.props.isError,
          delay: 1000,
        }),
      );
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <LoginPageStyled>
          <h1>Log In</h1>

          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            className="loginForm"
          >
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
              id="outlined-basic"
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="inputEmail"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
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
            {/* <button type="submit" className="LogInBtn">
            Log In
          </button> */}
            <Button
              type="submit"
              className="LogInBtn"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </form>
          {/* {this.props.isError && (
            <h2 className="error">{this.props.isError}. Please try again</h2>
          )} */}
        </LoginPageStyled>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isError: getErrorAuth(state),
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
