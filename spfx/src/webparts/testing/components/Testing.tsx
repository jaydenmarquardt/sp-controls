import * as React from "react";
export interface ITestingProps {}

export default function Testing(
  props: ITestingProps
): React.ReactElement<ITestingProps> {
  return (
    <section>
      <h1>MDT SPFX Library</h1>
      {JSON.stringify(props)}
    </section>
  );
}
