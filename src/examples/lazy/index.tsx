import React, { startTransition, Suspense, useState } from "react";

//  Lazy import
const CardComponent = React.lazy(() => import("./CardComponent"));
const CardComponentDuplicate = React.lazy(
  () => import("./CardComponentDuplicates")
);

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tab, setTab] = useState("approved");

  const switchTabComponent = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <>
      <h3>Lazy Load : </h3>
      <Suspense fallback={<div>Loading....</div>}>
        <CardComponent />
      </Suspense>

      {/* Example for use logcal renderedr and useTranssion, exam case for tab */}
      <p>Example use switch case = transition component lazy</p>
      <button
        onClick={() =>
          switchTabComponent(tab === "approved" ? "rejected" : "approved")
        }
      >
        Switch Component
      </button>
      <Suspense fallback={<div>Loading transision....</div>}>
        {tab === "approved" ? <CardComponent /> : <CardComponentDuplicate />}
      </Suspense>
    </>
  );
}
