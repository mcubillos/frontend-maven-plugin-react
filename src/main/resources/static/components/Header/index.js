import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon, Avatar, Search } from 'appkit-react';
import logo from '../../assets/images/logo.png';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-search">
                <div className="top-bar">
                    {this.renderLogo()}
                    {this.renderApplicationName()}
                    {this.renderPopover()}
                    {this.renderSearch()}
                </div>
            </nav>
        );
    };

    renderLogo() {
        return (
            <div className="pull-left logo-box">
                <img alt="logo" className="logo" src={logo} />
            </div>
        );
    };

    renderApplicationName() {
        return (
            <div className="app-name pull-left">Application name</div>
        );
    };

    renderPopover() {
        return (
            <div className="logout-container pull-right">
                <Popover
                    popoverContentClass="user-profile-popover"
                    content={
                        <div className="popup user-profile-container">
                            <ul className="profile-list">
                                <li className="profile-list-item profile">
                                    <div className="user-name">AB</div>
                                    <div className="user-text">
                                        <span className="user-full-name">User name</span>
                                    </div>
                                </li>
                                <li className="profile-list-item logout">
                                    <Icon
                                        name="fill-logout"
                                        size="16px"
                                        className="logout-icon"
                                    />
                                    <a href="/login">Logout</a>
                                </li>
                            </ul>
                        </div>
                    }
                    position={{ left: '-20px' }}
                >
                <Avatar style={{ backgroundColor: '#d04a02', cursor: 'pointer' }}>
                    AB
                </Avatar>
            </Popover>
        </div>
        );
    };

    renderSearch() {
        var content = null;

        if (this.props.showSearch) {
            content = (
                <div className="pull-right global-search">
                    <div style={{ margin: '.5625rem .625rem .5625rem 0' }}>
                        <Search />
                    </div>
                </div>
            );
        }

        return content;
    };
}

Header.propTypes = {
    showSearch: PropTypes.bool
};

Header.defaultProps = {
    showSearch: true
};

export default Header;
