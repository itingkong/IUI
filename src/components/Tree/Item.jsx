import Tree from "./index";
import { useState } from "react";
import styles from "./index.less";

export default function TreeItem(props) {
	const [expend, setExpend] = useState(false);

	const expendHandler = () => {
		setExpend(!expend);
	};

	return (
		<li className={styles.tree_item}>
			<div className={styles.tree_item_content} onClick={() => expendHandler()}>
				<span className={styles.tree_item_text}>{props.text}</span>
			</div>
			<div className={`${expend ? styles.show : styles.hide}`}>
				{props.children && <Tree treeData={props.children} />}
			</div>
		</li>
	);
}
