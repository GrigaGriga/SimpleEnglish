import React from "react";
import { newtonsCradle } from "ldrs";

newtonsCradle.register();

export default function Loader({ children, isLoading }) {
  return isLoading ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <l-newtons-cradle size="78" speed="1.4" color="black"></l-newtons-cradle>
    </div>
  ) : (
    children
  );
}