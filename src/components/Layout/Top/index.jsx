/**
 * 上、左右结构布局
 * @create 2022.2.3
 */
import React from "react";
import styles from "./index.less";

export default class Top extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { height = 0 } = this.props;
		return (
			<div className={styles.top} style={{ height: Number(height) }}>
				{this.props.children}
			</div>
		);
	}
}
