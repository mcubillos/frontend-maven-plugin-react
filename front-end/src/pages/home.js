import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'appkit-react/style/appkit-react.default.css';
import { Breadcrumb } from 'appkit-react';
import { Header, Footer, Menu } from '../components';

//import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            breadcrumb: ['Menu item 1', 'Line One', 'Child link two']
        };
    }
    handleClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };
    onItemSelect = items => {
        const breadcrumb = items
            .map(item => {
                return item.title;
            })
            .reverse();
        this.setState({
            breadcrumb
        });
    };
    render() {
        const { collapsed, breadcrumb } = this.state;
        return (
            <div className="nav-template outer-leftNav">
                <Header onCollapse={this.handleClick} />
                <div className="content">
                    <Menu onChange={this.onItemSelect} collapsed={collapsed} />
                    <div className="right-content">
                        <div className="current-page-label">
                            <Breadcrumb>
                                {breadcrumb.map((item, index) => {
                                    return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
                                })}
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
