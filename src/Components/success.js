import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './menu'
export default class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Menu tittle='Success!'/>
          <h1>Thank You For Submission</h1>
          <p>You will get an email with futher instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}