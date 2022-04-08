import ReactDOM from "react-dom";
import App from "./App";
import "/static/theme/index.css";
// require("/src/utils/global.js");

document.body.classList.add("theme-dark");

ReactDOM.render(<App />, document.getElementById("app"));
