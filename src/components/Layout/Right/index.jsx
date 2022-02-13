import React from "react";
import styles from "./index.less";

export default class Right extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className={styles.right}>{this.props.children}</div>;
	}
}
