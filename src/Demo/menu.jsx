import React from "react";
import List from "comp/List";
import Item from "comp/List/Item";
import styles from "./menu.less";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const { list = [] } = this.props;
		const list = [
			{ id: 0, title: "title1", desc: "description1" },
			{ id: 1, title: "title2", desc: "description2" },
		];
		return (
			<>
				{list.length && (
					<List>
						{list.map(item => (
							<Item key={item.id}>
								<p className={styles.text}>
									{item.title || "-"} - {item.desc || ""}
								</p>
							</Item>
						))}
					</List>
				)}
			</>
		);
	}
}
