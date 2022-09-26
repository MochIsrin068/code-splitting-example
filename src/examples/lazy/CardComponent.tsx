export default function CardComponent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array.apply(null, Array(10)).map((item, index: number) => {
          return (
            <div
              style={{
                padding: 20,
                borderRadius: 8,
                margin: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "lightblue",
              }}
            >
              {`item ke ${index + 1}, index ke ${index}`}
            </div>
          );
        })}
      </div>
    </>
  );
}
