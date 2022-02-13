import reactImg from "static/images/react.png";
import Row from "comp/Row";
import Colum from "comp/Colum";
import Card from "comp/Card";
import Avatar from "comp/Avatar";
import DescLine from "comp/DescLine/index";

export default function CardDemo() {
	return (
		<div>
			<img src={reactImg} style={{ width: "1rem" }} />
			<Row height={80} gap={10}>
				<Colum>
					<h1>row1</h1>
					<h1>row2</h1>
					<h1>row3</h1>
					<h1>row4</h1>
					<h1>row5</h1>
				</Colum>
				<Colum>
					<h1>row1</h1>
					<h1>row2</h1>
					<h1>row3</h1>
					<h1>row4</h1>
					<h1>row5</h1>
				</Colum>
				<Colum>
					<h1>row1row1row1</h1>
					<h1>row2row2row2</h1>
					<h1>row3row3row3</h1>
					<h1>row4row4 row4</h1>
					<h1>row5row5 row5</h1>
				</Colum>
				{/* <Colum>
					<h1>row1</h1>
					<h1>row2</h1>
					<h1>row3</h1>
					<h1>row4</h1>
					<h1>row5</h1>
				</Colum> */}
			</Row>

			<Card>
				cardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcardcard
			</Card>

			<Avatar src={reactImg} type="large" />

			<div>
				<DescLine title="姓名" text="itingkong" />
				<DescLine title="技能特长" text="全能王" />
			</div>
		</div>
	);
}
