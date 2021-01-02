import React from "react";

// import s from "./JsonDebug.module.scss";

export interface IJsonDebugProps {
  v?: any;
}

export const JsonDebug: React.FC<IJsonDebugProps> = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props.v, null, 2)}</pre>
    </div>
  );
};
