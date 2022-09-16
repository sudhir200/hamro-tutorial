import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props?.name,
      roll: props?.roll,
    };
  }
  componentDidMount() {
    // this.setState({ name: "ram" });
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ name: nextProps.name });
  }

  getData = () => {
    let data = [0, 1, 2, 3, 4, 5, 7];
    data.forEach((item) => {
      let self = this;
      self.setState({ name: "sudhir", roll: 12 });
    });
  };

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default ClassComponent;
