import React from "react";
import RegistrationForm from "ps-react/RegistrationForm";

export default class ExampleRegistrationForm extends React.Component {
  onSubmit = user => {
    console.log(user);
  };
  onReset = () => {
    console.log("reset form");
  };

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} onReset={this.onReset} />;
  }
}
