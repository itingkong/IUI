import styles from "./index.less";

export default function Item(props) {
	const { className = "", style = {} } = props;
	return (
		<li className={`${styles.item} ${className}`} style={style}>
			{props.children}
		</li>
	);
}
