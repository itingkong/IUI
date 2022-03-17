import { useState } from "react";
import LR from "./LR";
import TLR from "./TLR";
import styles from "./index.less";
import { layoutCaculator, throttle } from "utils/index";

export default function Layout(props) {
	const [layoutStyle, setLayoutStyle] = useState(layoutCaculator());
	const layoutStyleHandler = () => {
		setLayoutStyle(layoutCaculator());
	};

	const evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, throttle(layoutStyleHandler, 300), false);

	return <div className={styles.layout}>{layoutStyle === "1" ? <LR {...props} /> : <TLR {...props} />}</div>;
}
