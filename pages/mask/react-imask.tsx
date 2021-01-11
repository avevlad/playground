import React, { Suspense, useState } from "react";
// import { IMaskInput } from "react-imask";
// https://github.com/uNmAnNeR/imaskjs/issues/383#issuecomment-667539665
import { IMaskInput } from "@mirco312312/react-imask";
import dynamic from "next/dynamic";

// const IMaskInput = dynamic(
//   () => import("react-imask").then((mod) => mod.IMaskInput),
//   { ssr: false }
// );
export default function Page() {
  let [x, setX] = useState("zero-size");

  return (
    <div>
      <IMaskInput
        //@ts-ignore
        mask={Number}
        radix="."
        value="123"
        unmask={true} // true|false|'typed'
        // inputRef={(el) => (this.input = el)} // access to nested input
        // DO NOT USE onChange TO HANDLE CHANGES!
        // USE onAccept INSTEAD
        onAccept={
          // depending on prop above first argument is
          // `value` if `unmask=false`,
          // `unmaskedValue` if `unmask=true`,
          // `typedValue` if `unmask='typed'`
          (value, mask) => console.log(value)
        }
        // ...and more mask props in a guide

        // input props also available
        placeholder="Enter number here"
      />
    </div>
  );
}
