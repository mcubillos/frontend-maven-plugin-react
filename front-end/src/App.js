import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'appkit-react/style/appkit-react.default.css';
import { Header, Footer, HelpfulLink } from './components';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="nav-template outer-leftNav">
				<Header showSearch={false} />
				<div className="content">
					<h1 className="title">Welcome to PwC's Fit for Growth - Diagnose!</h1>
					<div className="container-tools">
						Contenedor de 894px
						margin left de  36px
					</div>
					<HelpfulLink {...this.getHelpfulLinkProps()}/>
        		</div>
				<Footer />
			</div>
		);
	};

	getHelpfulLinkProps() {
		return {
			links: ['aaaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff'],
			title: 'Helpful links'
		}
	}
}

export default App;
