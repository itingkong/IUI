/**
 * 上、左右结构布局
 * @create 2022.2.3
 */
import Top from "../Top";
import Left from "../Left";
import Right from "../Right";
import styles from "./index.less";
import { layoutMainHeight } from "utils/";

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
