import React, { useState } from "react";
import DataFetcher from "../components/DataFetcher";

const Display = () => {
  const [mikaData, setMikaData] = useState({});

  const handleDataUpdate = (data) => {
    setMikaData(data);
  };

  return (
    <div>
      <h2>Mika's Data</h2>
      <DataFetcher onDataUpdate={handleDataUpdate} />
      <pre>{JSON.stringify(mikaData, null, 2)}</pre>
    </div>
  );
};

export default Display;
