import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'appkit-react';

class Search extends Component {
    static propTypes = {
        size: PropTypes.string
    };
    state = {
        showDeleteBtn: { display: 'none' },
        inputValue: ''
    };
    handleOnChange(evt) {
        this.setState({
            showDeleteBtn: { display: evt.target.value ? '' : 'none' },
            inputValue: evt.target.value
        });
    }

    handelDeleteBtnClick() {
        this.setState({
            inputValue: '',
            showDeleteBtn: { display: 'none' }
        });
    }

    render() {
        return (
            <Input
                ref="input"
                value={this.state.inputValue}
                placeholder="Search"
                size={this.props.size}
                prefix={<Icon name="outline-search" />}
                className="input-search-box"
                suffix={
                    <Icon
                        name="outline-circle-delete"
                        className="input-end"
                        style={this.state.showDeleteBtn}
                        onClick={this.handelDeleteBtnClick.bind(this)}
                    />
                }
                onChange={this.handleOnChange.bind(this)}
            // onFocus={action('input-focus')}
            />
        );
    }
}

export default Search;
