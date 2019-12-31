// React DOM + React Router + React Transition Group
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// React Libraries (React Bootstrap, Slick Carouesl, Etc.)

// CSS Imports
import './index.css';

// Component Code
class Nav extends Component {
    constructor(props) {
        // Required to use this keyword
        super(props);
        this.state = {
            active: false
        }
        // Method Definitions for Constructor Function
        // Binds Component Methods to the Constructor Methods so State can be updated from UI
        this.toggleActive = this.toggleActive.bind(this);
    }

    // Define Methods for Component
    toggleActive = function () {
        this.setState(({
            active: !this.state.active
        }))
    }

    // Render is the only required Component method
    render() {
        return (
            <div>
                {/* Nav Toggle */}
                <div className="nav-toggle_background">
                    {/* Just nav background color */}
                    <NavLink to="/">
                        <div className={!this.state.active ? 'nav-logo ' : 'nav-logo active'}>
                        StoneGround Coffee Co.
                        </div>
                    </NavLink>

                </div>
                <button onClick={this.toggleActive}
                    className={!this.state.active ? 'nav-toggle ' : 'nav-toggle active'}>
                    <h6>Menu</h6>
                    </button>

                {/* Nav Modal */}
                <div className={!this.state.active ? 'modal' : 'modal active'}
                    onClick={this.toggleActive}>
                    {/* just some space */}
                </div>

                {/* Nav Body */}
                <div className={!this.state.active ? 'box box-0' : 'box box-0 active'}>
                    {/* just some space */}
                </div>

                <div className={!this.state.active ? 'box box-1' : 'box box-1 active'}>
                    {/* just some space */}
                </div>
                <div className={!this.state.active ? 'box box-2' : 'box box-2 active'}>
                    {/* just some space */}
                </div>
                <div className={!this.state.active ? 'box box-3' : 'box box-3 active'}>
                    {/* just some space */}
                </div>
                <div className={!this.state.active ? 'box box-4' : 'box box-4 active'}>
                    {/* just some space */}
                </div>

                {/* Nav List */}
                <div className={!this.state.active ? 'list list-fullwidth ' : 'list list-fullwidth active'}>
                    <NavLink activeClassName="nav-link-active" className="nav-link"
                        exact to='/' onClick={this.toggleActive}>Home</NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link"
                        exact to='/route-1' onClick={this.toggleActive}>About</NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link"
                        exact to='/route-scaffold' onClick={this.toggleActive}>Scaffold</NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link last"
                        to='/route-404' onClick={this.toggleActive}>404</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav