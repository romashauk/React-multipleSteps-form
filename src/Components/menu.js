import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Button from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

export default class Menu extends Component {
  state={
    open:false,
    show:null,
  }
  handleToggle =()=>{
    this.setState({open:true})
  }
  handleClose=()=>{
    this.setState({
      open:false
    })
  }
  showBar=()=>{
    this.setState({show: 'bar',open:false})
  }
  showFoo=()=>{
    this.setState({
      show:'foo',
      open:false
    })
  }
  render(){
    return(
      <React.Fragment>
          <AppBar title = {this.props.tittle}
          onLeftIconButtonClick={this.handleToggle}/>
          <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          
          >
          <AppBar title='Lorem ipsum'
          showMenuIconButton={false}
          
          > 
          <Button
          style={style.button}
          onClick={this.handleClose}
          />
          </AppBar>
            <MenuItem id="showFooId" onClick={this.showFoo}>Show Foo</MenuItem>
            <MenuItem id="showBarId" onClick={this.showBar}>Show Bar</MenuItem>

          </Drawer>
      </React.Fragment>
    )
  }
}
const style={
  button:{
    width: 46,
    height:46,
    marginLeft:100,
    color: 'white',
    border:'2px solid white',
    borderRadius: '50%',
    marginBottom: '10px',
    cursor:'pointer',
  }
}