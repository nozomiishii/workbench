import React from "react";

const EditExpencePage = props => {
  console.log(props);
  return <div>You are edittin page no.{props.match.params.id}</div>;
};

export default EditExpencePage;
