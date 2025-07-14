import "./App.css";
import html2pdf from "html2pdf.js";
import Template1 from "./resumes/template1";
import { useState } from "react";
import Template2 from "./resumes/template2";
import Template3 from "./resumes/template3";

function App() {
  const [activeTemplate, setTemplate] = useState("template1");
  const downloadPDF = () => {
    const element = document.getElementById("resume");
    const opt = {
      margin: 0,
      filename: "my-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4, useCORS: true, letterRendering: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // html2pdf().set(opt).from(element).save();
    html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf: any) => {
        const totalPages = pdf.internal.getNumberOfPages();
        if (totalPages > 1) {
          pdf.deletePage(2);
        }
        pdf.save("Mohit Rajput.pdf");
      });
  };
  return (
    <div className="app">
      <div className="leftCont">
        <div className="container">
          <div
            id="resume"
            className={`resume-template  ${activeTemplate != "template1" ? "border-none" : "none"}`}
          >
            {!!(activeTemplate == "template1") && <Template1 />}
            {!!(activeTemplate == "template2") && <Template2 />}
            {!!(activeTemplate == "template3") && <Template3 />}
          </div>
          <button className="download-btn" onClick={downloadPDF}>
            Download
          </button>
        </div>
      </div>
      <div className="rightCont">
        <div
          className={`previewCont ${activeTemplate == "template1" ? "activeTemp" : "none"}`}
          onClick={() => setTemplate("template1")}
        >
          <img src="./template1.jpg" />
          Template- 1
        </div>
        {/* <div
          className={`previewCont ${activeTemplate == "template2" ? "activeTemp" : "none"}`}
          onClick={() => setTemplate("template2")}
        >
          <img src="./template2.png" />
          Template- 2
        </div> */}
        <div
          className={`previewCont ${activeTemplate == "template3" ? "activeTemp" : "none"}`}
          onClick={() => setTemplate("template3")}
        >
          <img src="./template2.png" />
          Template- 3
        </div>
      </div>
    </div>
  );
}

export default App;
