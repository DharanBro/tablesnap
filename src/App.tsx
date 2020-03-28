import * as React from "react";
import jsPDF from "jspdf";
import "./styles.css";
import SnapTable from "./SnapTable";
import { data } from "./data";



export default function App() {
  const [source, setSource] = React.useState("");
  React.useEffect(() => {
    var doc = new jsPDF({ unit: "px" });
    const snapTable = new SnapTable(doc)
    snapTable.writeTable(data)
    const output = doc.output("datauri");
    console.log(output);
    setSource(output);
  }, []);
  return (
    <div className="App" style={{
      width: "100vw",
      height: "100vh",
    }}>
      <iframe
        width="80%"
        height="100%"
        typeof="application/pdf"
        title="pdf"
        src={source}
      />
    </div>
  );
}
