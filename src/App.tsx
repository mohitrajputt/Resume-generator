import "./App.css";
import html2pdf from "html2pdf.js";
import Template1 from "./resumes/template1";

function App() {
  const downloadPDF = () => {
    const element = document.getElementById("resume");
    const opt = {
      margin: 0,
      filename: "my-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };
  return (
    <>
      <div className="container">
        <div id="resume" className="resume-template">
          <Template1 />
        </div>
        <button className="download-btn" onClick={downloadPDF}>
          Download
        </button>
      </div>
    </>
  );
}

export default App;
