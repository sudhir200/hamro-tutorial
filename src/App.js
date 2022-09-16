import React, { useEffect } from "react";
import Routing from "./routing/routing";

function App(props) {
  return (
    <div>
      <Routing text={props.text} />
    </div>
  );
}

export default App;
