import TreeItem from "./Item";
import styles from "./index.less";

export default function Tree(props) {
	const { treeData = [], className = "", style = {} } = props;

	return (
		<ul className={`${styles.tree} ${className}`} style={style}>
			{treeData.length &&
				treeData.map((item, i) => {
					return <TreeItem {...item} key={i} />;
				})}
		</ul>
	);
}
