import * as React from "react";
import { IAppProps } from "./IAppProps";
import SchedulePage from "../SchedulePage/SchedulePage";

const App: React.SFC<IAppProps> = (props) => {
  return (
    <SchedulePage/>
  );
};

export default App;
