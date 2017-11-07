import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarHidden: false,
      sidebarMinimized: false,
      sidebarMobileShow: false
    };

    this.sidebarToggle = this.sidebarToggle.bind(this);
    this.mobileSideBarToggle = this.mobileSideBarToggle.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  sidebarToggle() {
    this.setState({
      sidebarHidden: !this.state.sidebarHidden
    });
  }

  mobileSideBarToggle() {
    this.setState({
      sidebarMobileShow: !this.state.sidebarMobileShow
    });
  }

  minimize() {
    this.setState({
      sidebarMinimized: !this.state.sidebarMinimized
    })
  }

  render() {

    let appClass = classNames({
      'sidebar-hidden': this.state.sidebarHidden,
      'sidebar-minimized': this.state.sidebarMinimized,
      'sidebar-mobile-show': this.state.sidebarMobileShow,
      'app': true
    });

    return (
      <div className={appClass}>
        <header className="app-header navbar">
          <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" onClick={this.mobileSideBarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <div className="app-body">
          <div className="sidebar">
            <nav className="sidebar-nav"></nav>
            <button className="sidebar-minimizer" type="button" onClick={this.minimize}></button>
          </div>
          <main className="main">
            <div style={{height: '3000px'}}>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
