/**
 * 按钮
 * @create 2022.3.28
 *
 * size:
 *      small, normal(默认), large
 * type:
 * 		full，宽度为父元素的宽度
 * onClick: 点击事件
 * disabled: 是否不可用
 * style: 样式
 * children: 子元素
 */

import styles from "./index.less";

export default function Button(props) {
	const { size = "", type = "", onClick = null, disabled = false, style = {}, children = null } = props;

	// 计算 className
	const clsNames = () => {
		const s = [styles.button];
		size && s.push(styles[size]);
		disabled && s.push(styles[disabled]);
		type && s.push(styles[type]);
		return s.join(" ").trim();
	};

	return (
		<button className={clsNames()} style={style} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
