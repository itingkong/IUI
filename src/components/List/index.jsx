/**
 * 列表
 * @param {Object} props
 * @create 2022.2.3
 */

import React from "react";

export default class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <ul>{this.props.children}</ul>;
	}
}
