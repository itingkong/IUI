/**
 * 卡片样式组件
 * @create 2022.2.7
 */
import styles from "./index.less";

export default function Card(props) {
	return <div className={styles.card}>{props.children}</div>;
}
