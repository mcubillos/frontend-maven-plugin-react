import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer col-12">
				<div className="foot-left ellipsis">
				© 2018 PwC. All rights reserved. PwC refers to the US member firm of
          		the PwC network or one of its subsidiaries or affiliates.
        		</div>
				<ul className="nav navbar-nav nav-footer pull-right">
					<li>Terms of use</li>
					<li>Privacy policy</li>
					<li>Full legal</li>
				</ul>
			</div>
		);
	}
}
