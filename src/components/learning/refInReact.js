import React, { useEffect, useRef } from "react";
import "./style.css";
import { createUser } from "../../api/reqres/users";
function RefInReact(props) {
  const inputRef = useRef({});
  useEffect(() => {
    // inputRef.current["name"].focus();
  }, []);
  const handleFormSubmit = () => {
    let name = inputRef.current["name"].value;
    let job = inputRef.current["job"].value;
    let data = { name, job };

    createUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={"ref-wrapper"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <input
          ref={(e) => (inputRef.current["name"] = e)}
          type={"text"}
          placeholder={"name"}
        />
        <input
          type={"text"}
          ref={(e) => (inputRef.current["job"] = e)}
          placeholder={"job"}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default RefInReact;
