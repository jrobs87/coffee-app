import React, { Component } from 'react';
import './index.css';

class BlockReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive = function () {
    console.log("toggled active state");
    this.setState(({
      active: !this.state.active
    }))
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    // Using a setTimeout to simulate React Transition Group
    setTimeout(function () {
      const cover = document.getElementById('cover');
      const background = document.getElementById('block-background');
      const header =  document.getElementById('header');
      const line =  document.getElementById('line');
      cover.classList.toggle('active');
      background.classList.toggle('active');
      header.classList.toggle('active');
      line.classList.toggle('active');
    }, 600);

    return (
      <div>
        {/* <button onClick={this.toggleActive} className="block-button">Click Me</button> */}
        <div className="line" id="line"></div>
        <div className="header-container">
        <div className="header" id="header">
          <p>Coffee roasted for summit days.</p>
        </div>
        </div>
       
        <div className="block-container">
        <div block className="block-background"  id="block-background">

        </div>
          <div className="block-content">
            {/* Text content can be placed here. */}
            <div>
              {this.props.content}
            </div>
          </div>
          <div className={this.state.active ? "block-cover active" : "block-cover"} id="cover">
            {/* Empty */}
          </div>
        </div>
      </div>
    );
  }

}
export default BlockReveal