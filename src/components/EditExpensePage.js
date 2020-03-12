import React from "react";

const EditExpensePage = props => {
  console.log(props);
  return <div>You are edittin page no.{props.match.params.id}</div>;
};

export default EditExpensePage;
