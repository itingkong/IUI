/**
 * 上、左右结构布局
 * @create 2022.2.3
 * 
 * topContent Top 组件内容
 * leftContent Left 组件内容
 * rightContent Right 组件内容
 */
import Top from "../Top";
import Left from "../Left";
import Right from "../Right";
import styles from "./index.less";
import { layoutMainHeight } from "utils/";

export default function TLR(props) {
	const { height = 100, topContent = null, leftContent = null, rightContent = null, ...res } = props;

	return (
		<div className={styles.tlr}>
			<Top height={height}>{topContent}</Top>
			<div className={styles.tlr_main} style={{ height: layoutMainHeight(height) }}>
				<Left {...res}>{leftContent}</Left>
				<Right {...res}>{rightContent}</Right>
			</div>
		</div>
	);
}
