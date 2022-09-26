import { useState, useEffect } from "react";

export default function DynamicImportPromise() {
  const [message, setMessage] = useState("Loading...");
  const [currentType, setCurrentType] = useState("");

  const getStatus = (newType: string = "") => {
    import("./StatusType")
      .then((type) => {
        const defaultType =
          type.StatusType[newType] || type.StatusType["accepted"];
        setCurrentType(newType || "accepted");
        setMessage(type.GenerateStatus(defaultType));
      })
      .catch((error) => {
        setMessage("error status type!");
        alert(error);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div>
      <h3>Dynamic Import :</h3>
      <div
        onClick={() =>
          getStatus(currentType === "rejected" ? "accepted" : "rejected")
        }
      >
        {message}, CLick For Check Status if{" "}
        <b>{currentType === "rejected" ? "Accepted" : "Rejected"}</b>
      </div>
    </div>
  );
}
