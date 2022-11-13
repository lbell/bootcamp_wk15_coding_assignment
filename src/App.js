import { useEffect, useReducer, useState } from "react";
import { fetchData } from "./api-airtable";
import "./App.css";
import RecordsList from "./components/RecordsList";

function App() {
  const [allRecords, setAllRecords] = useState([]);
  const [update, forceUpdate] = useReducer((x) => x + 1, 8);

  useEffect(() => {
    fetchData(setAllRecords);
  }, [update]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <h1>Patrol Weather</h1>
        <RecordsList
          allRecords={allRecords}
          setAllRecords={setAllRecords}
          forceUpdate={forceUpdate}
        />
      </div>
    </div>
  );
}

export default App;
