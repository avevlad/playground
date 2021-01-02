import React, { Suspense, useState } from "react";

export default function ValtioPage() {
  let [x, setX] = useState("zero-size");

  return <div>{x}</div>;
}
