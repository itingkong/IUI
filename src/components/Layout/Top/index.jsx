/**
 * 上、左右结构布局，顶部区域
 * @create 2022.2.3
 */
import styles from "./index.less";

export default function Top(props) {
	const { height = 0 } = props;
	return (
		<div className={styles.top} style={{ height: Number(height) }}>
			{props.children}
		</div>
	);
}
