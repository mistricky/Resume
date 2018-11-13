import * as React from "react";
import * as ReactDOM from "react-dom";
import { Resume } from "./components/Resume";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Resume />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
