import React from "react";
import "./RecordsList.css";
import RecordRow from "./RecordRow";

/**
 * Displays a list of existing records, and adds a blank record at the end for 
 * adding new data.
 */
export default function RecordsList({
  allRecords,
  setAllRecords,
  forceUpdate,
}) {
  return (
    <div id="existing-record">
      <h2>Current Records</h2>
      <div className="container">
        {allRecords.map((record) => {
          return (
            <div key={record.id}>
              <RecordRow record={record} forceUpdate={forceUpdate} />
            </div>
          );
        })}
        <div id="new-record" className="bg-light p-2 border">
          <h2>Add a New Record</h2>
          <RecordRow forceUpdate={forceUpdate} isEditable={true} />
        </div>
      </div>
    </div>
  );
}
