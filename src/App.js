import React, { Component } from 'react';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownView: false,
    }
  }

  toggleDropdownMenu = () => {
    this.setState({dropdownView: !this.state.dropdownView}) 
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className='nav-header'>
            <p>Start Bootstrap</p>
            <nav className='nav-bar'>
              <span>About</span>
              <span>Projects</span>
              <span>Contact</span>
            </nav>
            <div className='dropdown-menu' onClick={this.toggleDropdownMenu}>Menu
            <div className='menu-line-location'>
              <div className='menu-line'></div>
              <div className='menu-line'></div>
              <div className='menu-line'></div>
            </div>
            </div>         
          </div>
          {this.state.dropdownView
              ? (
                <nav className='mobile-nav-menu'>
                  <span>About</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </nav>
              )
              : null
            }
        </header>
        <section className='section-1'>

        </section>
      </div>
    );
  }
}

export default App;
