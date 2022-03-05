import { useContext } from "react";
import { RowContext } from "utils/context";
import { px2rem } from "utils";
import styles from "./index.less";

export default function Colum(props) {
	const { gap = 0, width = 0, childCount = 0, children, className = "", style = {} } = useContext(RowContext);
	let columWidth = "auto";
	if (width && childCount) {
		columWidth = (Number(width) - Number(gap) * children.length) / Number(childCount);
	}

	return (
		<div
			style={{ marginRight: px2rem(gap), width: px2rem(columWidth), ...style }}
			className={`${styles.colum} ${gap ? styles.colum_gap : ""} ${className}`}
		>
			{props.children}
		</div>
	);
}
