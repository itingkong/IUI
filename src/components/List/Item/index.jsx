import React from "react";
import styles from "./index.less";

export default class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <li className={styles.item}>{this.props.children}</li>;
	}
}
