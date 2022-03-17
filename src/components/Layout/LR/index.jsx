/**
 * 左右结构布局
 * @create 2022.2.3
 */
import Left from "../Left";
import Right from "../Right";
import styles from "./index.less";

export default function LR(props) {
	const { leftContent = null, rightContent = null, ...res } = props;
	return (
		<div className={styles.lr}>
			<Left {...res}>{leftContent}</Left>
			<Right {...res}>{rightContent}</Right>
		</div>
	);
}
