import React, { useEffect } from "react";
import suneditor from "suneditor";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";
import ReactPlayer from "react-player";
import ClassComponent from "./classComponent";
import RefInReact from "./refInReact";
import "./style.css";
function Learning(props) {
  const [name, setName] = React.useState("Sudhir");
  useEffect(() => {
    const editor = suneditor.create(document.getElementById("learning"), {
      plugins: plugins,
      width: 400,
      height: 100,
      buttonList: [
        ["preview", "print"],
        ["save", "template"],
        /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
      ],
    });
    editor.onChange = function (contents, core) {
      console.log(contents);
    };
  }, []);
  const updateName = () => {
    setName("ram");
  };
  return (
    <div className={"learn-wrapper"} style={{ padding: 10 }}>
      <div id={"learn-item"}>
        <h1>Refs in react</h1>
        <RefInReact />
      </div>
      <div id={"learn-item"}>
        <h1>Sun editor</h1>
        <textarea id={"learning"}></textarea>
      </div>
      <div id={"learn-item"}>
        <h1>React Player</h1>
        <ReactPlayer
          playing={false}
          url={
            "https://www.youtube.com/watch?v=6MgsHSAcI9k&ab_channel=T-Series"
          }
        />
      </div>
      <div id={"learn-item"}>
        <h1>Class</h1>
        <ClassComponent name={name} />
      </div>
    </div>
  );
}

export default Learning;
