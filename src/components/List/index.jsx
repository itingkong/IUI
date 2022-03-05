/**
 * 列表
 * @param {Object} props
 * @create 2022.2.3
 */
export default function List(props) {
	const { className = "", style = {} } = props;
	return (
		<ul className={className} style={style}>
			{props.children}
		</ul>
	);
}
