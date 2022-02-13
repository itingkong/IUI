/**
 * 上、左右结构布局
 * @create 2022.2.3
 */
import React from "react";
import Top from "../Top";
import Left from "../Left";
import Right from "../Right";
import styles from "./index.less";
import { layoutMainHeight } from "utils/";

// export default class TLR extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			height: 100, // Top 组件的高度
// 		};
// 	}
// 	render() {
// 		const { height } = this.state;
// 		const { leftContent = null, rightContent = null } = this.props;
// 		return (
// 			<div className={styles.tlr}>
// 				<Top height={height} />
// 				<div className={styles.tlr_main} style={{ height: layoutMainHeight(height) }}>
// 					<Left>{leftContent}</Left>
// 					<Right>{rightContent}</Right>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default function TLR(props) {
	const { height = 100, leftContent = null, rightContent = null, ...res } = props;

	return (
		<div className={styles.tlr}>
			<Top height={height}>TOP</Top>
			<div className={styles.tlr_main} style={{ height: layoutMainHeight(height) }}>
				<Left {...res}>{leftContent}</Left>
				<Right {...res}>{rightContent}</Right>
			</div>
		</div>
	);
}
