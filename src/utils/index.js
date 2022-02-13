/**
 * 获取示口宽度
 * @create 2022.2.2
 */
export const docuWidth = () => document.documentElement.clientWidth;

/**
 * 获取示口高度
 * @create 2022.2.3
 */
export const docuHeight = () => document.documentElement.clientHeight;

/**
 * 处理根标签字体大小
 * @create 2022.2.1
 */
export const rootSizeHandler = () => {
	const isPC = !/Android|iPhone|iPad/gi.test(window.navigator.appVersion);
	const docEle = document.documentElement;
	const docWidth = docEle.clientWidth;
	let rootSize = "100px";

	if (!isPC) {
		rootSize = docWidth / 3.75 + "px";
	}
	docEle.style.fontSize = rootSize;
};

/**
 * 计算屏幕宽度以调整 Layout 样式
 * @create 2022.2.2
 */
export const layoutCaculator = () => {
	const width = docuWidth();
	let style = "";

	/**
	 * 1 尺寸小于 iPad 的宽度，定义为移动端小屏
	 * 2 依据 iPad 尺寸
	 * 3 依据主流 PC 屏幕尺寸、iPad 横屏尺寸
	 * 4 大屏尺寸
	 */
	if (width < 768) {
		style = "1";
	} else if (width < 1024) {
		style = "2";
	} else if (width < 1200) {
		style = "3";
	} else {
		style = "4";
	}

	return style;
};

/**
 * 防抖
 * @create 2022.2.2
 */
export const debounce = (cb, delay = 1000) => {
	let timer = null;
	return function (args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			cb(args);
		}, delay);
	};
};

/**
 * 节流
 * @create 2022.2.2
 */
// export const throttle = (cb, delay = 1000) => {
// 	let time = 0;
// 	return function () {
// 		if (Date.now() - time >= delay) {
// 			cb();
// 			time = Date.now();
// 		}
// 	};
// };
export const throttle = (cb, delay = 1000, excute = false) => {
	let time = null;
	excute && cb();
	return function () {
		if (!time) {
			time = setTimeout(() => {
				time = null;
				cb();
			}, delay);
		}
	};
};

/**
 * 计算 layout main 区域的高度
 * @create 2022.2.3
 * @param {Number} extraHeight 需要被减去的额外高度
 */
export const layoutMainHeight = (extraHeight = 0) => docuHeight() - extraHeight;

/**
 * px 转 rem
 * @create 2022.2.7
 */
export const px2rem = p => {
	if (isNaN(Number(p))) return "auto";
	return Number(p) / 100 + "rem";
};
