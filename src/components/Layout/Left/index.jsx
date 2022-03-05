import React from "react";
import styles from "./index.less";

export default class Left extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mini: false,
		};
	}

	minimiseHandler = () => {
		const { mini } = this.state;
		this.setState({ mini: !mini });
	};

	render() {
		const { mini } = this.state;
		const { showMiniBtn = false, className = "", style = {} } = this.props;

		return (
			<div
				className={`${styles.left} ${mini ? styles.left_mini : styles.left_regular} ${className}`}
				style={style}
			>
				<div className={styles.left_content}>{this.props.children}</div>
				{showMiniBtn && (
					<div className={styles.left_btn} onClick={this.minimiseHandler}>
						{mini ? ">>" : "<<"}
					</div>
				)}
			</div>
		);
	}
}
