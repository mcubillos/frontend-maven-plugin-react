import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Icon, ListItem } from 'appkit-react';
import './helpfullink.css';

class HelpfulLink extends Component {

    render() {
        return (
            <div className="helpfullinks-container">
                <span className="title">{this.props.title}</span>
                <List divider>
                    {this.props.links.map(this.renderListItem)}
                </List>
            </div>
        );
    };

    renderListItem(item, index) {
        return (
            <ListItem key={index}>
                <span className="item-name">{item}</span>
                <Icon name="outline-information" />
            </ListItem>
        );
    };
}

HelpfulLink.propTypes = {
    links: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default HelpfulLink;
