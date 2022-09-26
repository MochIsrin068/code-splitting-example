import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("./Components/Hero"));
const Service = lazy(() => import("./Components/Service"));

const SuspenseExample = () => {
  return (
    <div>
      <h3>Suspense : </h3>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <section>
          <Hero />
          <Service />
        </section>
      </Suspense>
    </div>
  );
};

export default SuspenseExample;
