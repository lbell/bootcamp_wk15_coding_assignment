import React, { useState } from "react";
import DangerRose from "./DangerRose";
import {
  addRecord,
  deleteRecord,
  typeData,
  updateRecord,
} from "../api-airtable";
import InlineEdit from "./InlineEdit";

/**
 * Buids a row with form and buttons for records.
 */
export default function RecordRow({
  record = { id: "newRecord" },
  forceUpdate,
  isEditable = false,
}) {
  const [editable, setEditable] = useState(isEditable);
  const [recordData, setRecordData] = useState({ ...record });
  const [dangerRose, setDangerRose] = useState({
    id: record.id,
    polys: record.polys,
  });

  function saveRecord(id, forceUpdate) {
    recordData.danger_rose = JSON.stringify(dangerRose.polys);
    const typedData = typeData(recordData);
    if (id === "newRecord") {
      delete recordData.id;
      addRecord(typedData);
      forceUpdate();
    } else {
      updateRecord(id, typedData);
      forceUpdate();
    }
    // Add 1 second timeout before reload. Not ideal
    // TODO: Sort async / promise API
    setTimeout(function () {
      forceUpdate();
    }, 2000);
  }

  function editClick() {
    setEditable(!editable);
  }

  return (
    <div className="entry-row row border p-2 m-2">
      <div className="data-box col-8">
        <div className="row mt-3">
          <div className="record-date col-6">
            <InlineEdit
              label="Date"
              type="date"
              editable={editable}
              dataKey="date"
              recordData={recordData}
              setRecordData={setRecordData}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <InlineEdit
              label="Snow Overnight"
              editable={editable}
              dataKey="snow_overnight"
              recordData={recordData}
              setRecordData={setRecordData}
            />
          </div>
          <div className="col-4">
            <InlineEdit
              label="Water Equivalent"
              editable={editable}
              dataKey="water_equivalent"
              recordData={recordData}
              setRecordData={setRecordData}
            />
          </div>
          <div className="col-4">
            <InlineEdit
              label="Density"
              editable={false}
              dataKey="density"
              recordData={recordData}
              readonly={true}
            />
          </div>
        </div>
      </div>
      <div className="rose-box col align-self-center">
        <DangerRose
          dangerRose={dangerRose}
          setDangerRose={setDangerRose}
          editable={editable}
        />
      </div>
      <div
        role="group"
        className="record-buttons col btn-group align-self-center"
        aria-label="Edit Buttons"
      >
        <div>
          <button
            className={`${editable ? "d-none" : "d-block"} btn btn-primary `}
            onClick={() => {
              editClick(record.id);
            }}
          >
            Edit
          </button>
        </div>
        <div>
          <button
            className={`${editable ? "d-block" : "d-none"} btn btn-primary`}
            onClick={() => {
              saveRecord(record.id, forceUpdate);
              forceUpdate();
              setEditable(false);
            }}
          >
            Save
          </button>
        </div>
        <div>
          <button
            className={`${editable ? "d-block" : "d-none"} btn btn-link`}
            onClick={() => {
              deleteRecord(record.id);
              forceUpdate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
