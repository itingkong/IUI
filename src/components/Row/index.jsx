import { useRef, useEffect, useState } from "react";
import styles from "./index.less";
import { RowContext } from "utils/context";

export default function Row(props) {
	const { height = 0, className = "", style = {} } = props;
	const rowRef = useRef(null);
	let [curWidth, setCurWidth] = useState(0);
	let [childCount, setChildCount] = useState(0);
	useEffect(() => {
		setCurWidth(rowRef.current.clientWidth);
		setChildCount(rowRef.current.children.length);
	}, []);

	return (
		<RowContext.Provider value={{ ...props, width: curWidth, childCount }}>
			<div
				ref={rowRef}
				className={`${styles.row} ${height ? styles.row_limitHeight : ""} ${className}`}
				style={{ height: Number(height) || "inherit", ...style }}
			>
				{props.children}
			</div>
		</RowContext.Provider>
	);
}
