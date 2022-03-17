/**
 * 垂直模式
 * @create 2022.3.12
 *
 * current: 当前步骤
 * circleType:
 *      1 显示步骤数值
 *      2 圆点样式
 */
import styles from "../index.less";

export default function Vertical(props) {
	const { data, current = 0, circleType = "1" } = props;

	const circleStyle = i => {
		// current 为当前进度索引
		return i < current || current === data.length - 1 ? styles.actived : i === current ? styles.current : "";
	};

	return (
		<ul className={styles.vertical}>
			{data.map((item, i) => (
				<li className={styles.item} key={i}>
					<div className={styles.item_left}>
						{/* circle */}
						{circleType === "1" ? (
							<div className={`${styles.item_circle} ${circleStyle(i)}`}>{item.circleValue || i + 1}</div>
						) : (
							<div className={`${styles.item_dot} ${circleStyle(i)}`}></div>
						)}

						{/* line */}
						<div className={`${styles.item_line} ${i < current ? styles.actived : ""}`}></div>
					</div>

					<div className={styles.item_content}>
						{/* title */}
						<p className={styles.item_title}>{item.title}</p>

						{/* step describe */}
						{item.desc ? <p className={styles.item_desc}>{item.desc}</p> : null}

						{/* extra template */}
						{item.template || null}
					</div>
				</li>
			))}
		</ul>
	);
}
