import React from "react";

export const Form = () => {
  return (
    <form>
      <p>Please Login</p>
      <input type="text" placeholder="username" />
      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
      />
      <button>Login</button>
    </form>
  );
};
