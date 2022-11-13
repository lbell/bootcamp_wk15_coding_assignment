import React from "react";
import "./DangerRose.css";

/**
 * Empty map of all polygons we fold into what's set so there aren't errors when
 * we call the polygon vars for filling out colors, etc.
 */
const polyMap = {
  n1: "",
  ne1: "",
  e1: "",
  se1: "",
  s1: "",
  sw1: "",
  w1: "",
  nw1: "",
  n2: "",
  ne2: "",
  e2: "",
  se2: "",
  s2: "",
  sw2: "",
  w2: "",
  nw2: "",
  n3: "",
  ne3: "",
  e3: "",
  se3: "",
  s3: "",
  sw3: "",
  w3: "",
  nw3: "",
};

export default function DangerRose({ dangerRose, setDangerRose, editable }) {
  const polys = { ...polyMap, ...dangerRose.polys };

  /**
   * Cycles danger color of the given poly green-yellow-orange-red-grey
   */
  function toggleDanger(id) {
    // only allow if the rose is editable
    if (editable) {
      let newColor;
      switch (polys[id]) {
        case "":
          newColor = "green";
          break;
        case "green":
          newColor = "yellow";
          break;
        case "yellow":
          newColor = "orange";
          break;
        case "orange":
          newColor = "red";
          break;
        case "red":
          newColor = "";
          break;
        default:
          break;
      }
      let entry = {};
      entry[id] = newColor;

      let newRose = { ...dangerRose };
      newRose.polys = { ...newRose.polys, ...entry };
      setDangerRose(newRose);
    }
  }

  return (
    // Danger rose
    <div id={dangerRose.id} className="danger-rose-container">
      <svg
        className="danger-rose-svg"
        id="svg2"
        version="1.1"
        viewBox="0 0 739.51 739.51"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="g8"
          transform="translate(-583.13 -406.66)"
          fill="none"
          stroke="#000"
        >
          <path
            // Each polygon has a coordinate ID. Colors are driven by classes
            // such that .rose-poly.red is red. Other classes are toggled by the
            // editable status to change pointer and polygone highlight.
            id={`sw1`}
            className={`rose-poly ${polys.sw1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m694.47 882.69-110.84 46.596 216.26 216.33 46.131-111.32-0.705-8e-4z"
          />
          <path
            id={`w1`}
            className={`rose-poly ${polys.w1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m695 668.84-111.33-45.426-0.0483 305.88 110.84-46.596z"
          />
          <path
            id={`nw1`}
            className={`rose-poly ${polys.nw1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m800 407.15-216.32 216.26 111.33 45.426 151.09-150.35z"
          />
          <path
            id={`s1`}
            className={`rose-poly ${polys.s1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m846.01 1034.3-46.131 111.32 305.88 0.048-46.099-111.34-0.4991 0.498z"
          />
          <path
            id={`n1`}
            className={`rose-poly ${polys.n1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1105.9 407.2-305.88-0.0483 46.097 111.34 0.50108-0.49799 213.15 0.53224z"
          />
          <path
            id={`se1`}
            className={`rose-poly ${polys.se1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1322.1 929.41-111.33-45.426-151.1 150.34 46.099 111.34z"
          />
          <path
            id={`e1`}
            className={`rose-poly ${polys.e1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1322.1 623.53-110.84 46.598-0.533 213.86 111.33 45.426z"
          />
          <path
            id={`ne1`}
            className={`rose-poly ${polys.ne1} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1105.9 407.2-46.131 111.32 0.705 8e-4 150.84 151.6 110.84-46.598z"
          />
          <path
            id={`sw3`}
            className={`rose-poly ${polys.sw3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m953.02 776.02-148.84 62.041 87.422 87.171z"
          />
          <path
            id={`s3`}
            className={`rose-poly ${polys.s3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m953.02 776.02-61.413 149.21 122.48-0.23609z"
          />
          <path
            id={`w3`}
            className={`rose-poly ${polys.w3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m804.59 713.9-0.64604 0.64879 0.23539 123.51 148.84-62.041z"
          />
          <path
            id={`nw3`}
            className={`rose-poly ${polys.nw3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m804.59 713.9 148.42 62.121-61.067-148.98-0.91608 2e-3z"
          />
          <path
            id={`n3`}
            className={`rose-poly ${polys.n3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1015.1 627.46-0.6482-0.64665-122.48 0.23409 61.067 148.98z"
          />
          <path
            id={`ne3`}
            className={`rose-poly ${polys.ne3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1015.1 627.46-62.062 148.57 148.84-61.124v-0.91696z"
          />
          <path
            id={`se3`}
            className={`rose-poly ${polys.se3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1102.1 837.5-149.07-61.472 61.066 148.98 0.9161-0.00152z"
          />
          <path
            id={`e3`}
            className={`rose-poly ${polys.e3} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1101.9 714.9-148.84 61.124 149.07 61.472z"
          />
          <path
            id={`s2`}
            className={`rose-poly ${polys.s2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m890.65 925.02-45.452 109.02 214.07 0.3019-45.126-109.14z"
          />
          <path
            id={`sw2`}
            className={`rose-poly ${polys.sw2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m803.39 837.7-109.36 45.071 151.16 151.26 45.452-109.02z"
          />
          <path
            id={`w2`}
            className={`rose-poly ${polys.w2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m694.34 669.16-0.3024 213.61 109.36-45.071 0.1736-123.31z"
          />
          <path
            id={`nw2`}
            className={`rose-poly ${polys.nw2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m845.93 518.33-151.59 150.83 109.23 45.238 87.449-87.012z"
          />
          <path
            id={`se2`}
            className={`rose-poly ${polys.se2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1210.9 883.5-109.13-45.378-87.501 87.066-0.078 1e-4 45.126 109.14z"
          />
          <path
            id={`e2`}
            className={`rose-poly ${polys.e2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1211.2 669.89-109.26 44.93-0.1737 123.31 109.13 45.378z"
          />
          <path
            id={`ne2`}
            className={`rose-poly ${polys.ne2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m1060 518.63-45.356 108.88 87.255 87.315 109.26-44.93z"
          />
          <path
            id={`n2`}
            className={`rose-poly ${polys.n2} ${
              !editable || "rose-poly-active"
            }`}
            onClick={function (e) {
              toggleDanger(e.target.id);
            }}
            d="m845.93 518.33 45.091 109.06 0.0549-0.0547 123.57 0.17457 45.356-108.88z"
          />
        </g>
      </svg>
    </div>
  );
}
