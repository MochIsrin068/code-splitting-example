import React, { Suspense } from "react";
import MyErrorBoundary from "./MyErrorBoundary";

const ExampleThrowComponent = React.lazy(
  () => import("./ExampleThrowComponent")
);

export default function ErrorBudariesInCodeSplitting() {
  return (
    <>
      <h3>Error Boundaries :</h3>
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <ExampleThrowComponent />
        </Suspense>
      </MyErrorBoundary>
    </>
  );
}
