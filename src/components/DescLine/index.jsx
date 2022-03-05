/**
 * 描述
 * 如，姓名：itingkong
 * @create 2022.2.10
 */
import styles from "./index.less";

export default function DescLine(props) {
	const { width = "", title = "", text = "", className = "", style = {} } = props;

	return (
		<div className={`${styles.descline} ${className}`} style={style}>
			<div className={styles.descline_title} style={{ width }}>
				{title}：
			</div>
			<div className={styles.descline_text}>{text}</div>
		</div>
	);
}
