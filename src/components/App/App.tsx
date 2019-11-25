import * as React from "react";
import { IAppProps } from "./IAppProps";
import AppRouter from "../AppRouter/AppRouter";

const App: React.SFC<IAppProps> = (props) => {
  return (
    <div>
      <AppRouter/>
    </div>    
  );
};

export default App;
