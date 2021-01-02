import React, { Suspense } from "react";
import { proxy, useProxy } from "valtio";
import { devtools } from "valtio/utils";
import { Product } from "constants/products";
import { JsonDebug } from "components/JsonDebug/JsonDebug";

const isServer = typeof window === "undefined";

interface State {
  count: number;
  text: string;
  products: Promise<Product[]>;
}

const state = proxy<State>({
  count: 0,
  text: "hello",
  products: fetch(`/api/products`).then((res) => res.json()),
});
const unsub = devtools(state, "state name");

function Count() {
  const snapshot = useProxy(state);
  return (
    <div>
      {snapshot.count}
      <br />
      <button onClick={() => ++state.count}>+1</button>
    </div>
  );
}
function Post() {
  const snapshot = useProxy(state);
  return (
    <div>
      {snapshot.products.map(({ key, price, title }) => (
        <div key={key}>
          <img style={{ maxWidth: 100 }} src={`/images/products/${key}.jpeg`} />
          {title}
        </div>
      ))}
      <JsonDebug v={snapshot.products} />
    </div>
  );
}

export default function ValtioPage() {
  const snapshot = useProxy(state);
  console.log("snapshot:", snapshot);

  return (
    <div>
      code:{" "}
      <a
        target="_blank"
        href="https://github.com/avevlad/playground/blob/main/pages/state/valtio/index.tsx"
      >
        github.com/avevlad/playground/state/valtio/index.tsx
      </a>
      <Count />
      {!isServer && (
        <Suspense fallback={<span>waiting...</span>}>
          <Post />
        </Suspense>
      )}
    </div>
  );
}
