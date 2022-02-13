/**
 * 左右结构布局
 * @create 2022.2.3
 */
import React from "react";
import Left from "../Left";
import Right from "../Right";
import styles from "./index.less";

// export default class LR extends React.Component {
// 	render() {
// 		return (
// 			<div className={styles.lr}>
// 				<Left />
// 				<Right>right</Right>
// 			</div>
// 		);
// 	}
// }

export default function LR(props) {
	const { leftContent = null, rightContent = null, ...res } = props;
	return (
		<div className={styles.lr}>
			<Left {...res}>{leftContent}</Left>
			<Right {...res}>{rightContent}</Right>
		</div>
	);
}
