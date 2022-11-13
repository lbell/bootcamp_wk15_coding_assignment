const Airtable = require("airtable");
const token = "keybsgJSLCrQQypOc"; // TODO: Hide in config somewhere
const base = new Airtable({ apiKey: token }).base("appsfIzAmNObyh7GY");

export function fetchData(setAllRecords) {
  base("weather_raw")
    .select({
      view: "Grid view",
    })
    .firstPage(async function (err, records) {
      if (err) {
        console.error(err);
        return;
      }

      let output = [];
      records.forEach(function (record) {
        // convert record into proper types
        const id = record.id;
        const date = record.get("date");
        const current_temp =
          typeof record.get("current_temp") === "number"
            ? Number(record.get("current_temp")).toFixed(2)
            : "";
        const snow_overnight =
          typeof record.get("snow_overnight") === "number"
            ? Number(record.get("snow_overnight")).toFixed(2)
            : "";
        const water_equivalent =
          typeof record.get("water_equivalent") === "number"
            ? Number(record.get("water_equivalent")).toFixed(2)
            : "";
        const density =
          typeof record.get("density") === "number"
            ? Number(record.get("density")).toFixed(2)
            : "";
        const polys = record.get("danger_rose")
          ? JSON.parse(record.get("danger_rose"))
          : null;

        let morphed = {
          id,
          date,
          current_temp,
          snow_overnight,
          water_equivalent,
          density,
          // convert danger_rose string to object if exists
          polys,
        };
        output.push(morphed);
      });
      setAllRecords(output);
    });
}

/**
 * Sets the data feilds to proper type (or null) for API
 *
 * @param {obj} recordData All data stored in state
 * @returns obj sanitized for import
 */
export function typeData(recordData) {
  return {
    date: recordData.date,
    danger_rose: recordData.danger_rose,
    snow_overnight: recordData.snow_overnight
      ? Number(recordData.snow_overnight)
      : null,
    water_equivalent: recordData.water_equivalent
      ? Number(recordData.water_equivalent)
      : null,
  };
}

/**
 * Adds a record
 */
export function addRecord(data) {
  base("weather_raw").create(
    [
      {
        fields: { ...data }, // MMMMMM spread.
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}


/**
 * Deletes a record from Airtable by ID
 */
export function deleteRecord(record) {
  base("weather_raw").destroy(record, function (err, deletedRecord) {
    if (err) {
      console.error(err);
      return;
    }
  });
}

/**
 * Edits a record
 */
export function updateRecord(id, values) {
  base("weather_raw").update(id, values, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
  });
}
