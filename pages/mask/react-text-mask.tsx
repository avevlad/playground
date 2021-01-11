import React, { Suspense, useState } from "react";
import MaskedInput from "react-text-mask";

export default function Page() {
  let [x, setX] = useState("zero-size");

  return (
    <div>
      <MaskedInput
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
      />
    </div>
  );
}
