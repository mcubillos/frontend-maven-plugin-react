import React, { Component } from 'react';
// import ClassName from 'classnames';
import PropTypes from 'prop-types';
import { Icon, Menu, SubMenu } from 'appkit-react';
export default class LeftNav extends Component {
    render() {
        const { collapsed, onChange } = this.props;

        return (
            <Menu
                className="left-nav"
                collapsed={Boolean(collapsed)}
                defaultSelectedKey="1"
                onItemSelect={onChange}
            >
                <SubMenu
                    key="sub1"
                    title="Menu item 1"
                    icon={<Icon name="outline-home" />}
                >
                    <SubMenu key="sub1-1" inline title="Link One">
                        <Menu.Item key="0">Child link one</Menu.Item>
                        <Menu.Item key="1">Child link two</Menu.Item>
                        <Menu.Item key="2">Child link three</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">Link two</Menu.Item>
                    <Menu.Item key="4">Link three</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title="Menu item 2"
                    icon={<Icon name="outline-center-map" />}
                >
                    <SubMenu key="sub2-1" inline title="Link One">
                        <Menu.Item key="5">Child link one</Menu.Item>
                        <Menu.Item key="6">Child link two</Menu.Item>
                        <Menu.Item key="7">Child link three</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="8">Link two</Menu.Item>
                    <Menu.Item key="9">Link three</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title="Menu item 3"
                    icon={<Icon name="outline-email" />}
                >
                    <SubMenu key="sub3-1" inline title="Link One">
                        <Menu.Item key="10">Child link one</Menu.Item>
                        <Menu.Item key="11">Child link two</Menu.Item>
                        <Menu.Item key="12">Child link three</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="13">Link two</Menu.Item>
                    <Menu.Item key="14">Link three</Menu.Item>
                </SubMenu>
                <Menu.Item key="15" icon={<Icon name="outline-hospital" />}>
                    Menu Item 4
        </Menu.Item>
            </Menu>
        );
    }
}

LeftNav.propTypes = {
    collapsed: PropTypes.bool
};
