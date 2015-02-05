/** @jsx React.DOM */

var React = require('react');

var Header = require('./components/header.js');

React.renderComponent(
	
	<div>
		Välkommen
		<Header />
	</div>,

document.body);