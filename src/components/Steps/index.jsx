/**
 * 步骤条
 * type: 1 horizontal 水平模式；2 vertical 垂直模式
 * @create 2022.3.12
 */
import styles from "./index.less";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

export default function Steps(props) {
	const { type = "1", data = [], ...res } = props;
	if (!data.length) return null;
	return (
		<div className={styles.steps}>
			{type === "1" ? <Horizontal data={data} {...res} /> : <Vertical data={data} {...res} />}
		</div>
	);
}
