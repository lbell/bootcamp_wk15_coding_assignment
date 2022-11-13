import React, { useState } from "react";

export default function InlineEdit({
  dataKey,
  recordData,
  setRecordData,
  editable,
  label,
  readonly = false,
  type = "text",
}) {
  const [editingValue, setEditingValue] = useState(recordData[dataKey] || "");
  const editClass = editable ? "form-control" : "form-control-plaintext border";

  /**
   * Set the editing value on change to keep track of edits.
   *
   * @param {obj} event event object
   */
  function onChange(event) {
    setEditingValue(event.target.value);
  }

  /**
   * Register Enter or Escape as blur (doesn't seem to be the case by default)
   *
   * @param {obj} event event object
   */
  function onKeyDown(event) {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  /**
   * Set State on blur (lose focus)
   *
   * @param {obj} event Event object
   */
  function onBlur(event) {
    if (event.target.value.trim() === "") {
      setEditingValue(recordData[dataKey]);
    } else {
      setRecordData({ ...recordData, [dataKey]: event.target.value });
    }
  }

  /**
   * Empty function to silence complaints about onChange needing a function
   * @returns nothing
   */
  function shh() {
    return;
  }

  return (
    <div>
      <label htmlFor={dataKey} className="form-label">
        {label}
      </label>
      <input
        readOnly={readonly}
        id={dataKey}
        className={editClass}
        type={type}
        value={editingValue}
        onChange={editable ? onChange : shh}
        onKeyDown={editable ? onKeyDown : shh}
        onBlur={editable ? onBlur : shh}
      />
    </div>
  );
}
