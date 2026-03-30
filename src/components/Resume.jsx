import React from "react";
import { jsPDF } from "jspdf";
import "./Resume.css";

const Resume = () => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Rogelio Roger Dela Cruz II", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Email: arardelacruz55@gmail.com", 20, 30);
    doc.text("GitHub: github.com/Captainroger-prog", 20, 37);

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Objective", 20, 50);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Motivated Computer Science student passionate about web and mobile development.Practicing PHP, Laravel, React JS, and Flutter. Eager to contribute to real-world software projects.",
      20,
      57,
      { maxWidth: 170 }
    );

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Education", 20, 80);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Global College, Tangub City - Bachelor’s in Computer Science", 20, 87);
    doc.text("SHS Mahayag School of Arts and Trade - Senior High School", 20, 94);
    doc.text("Lourmah Elementary School - Elementary School", 20, 101);

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Skills", 20, 120);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("PHP, Laravel, React JS, Flutter", 20, 127);

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Hobbies", 20, 147);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Reading", 20, 154);

    doc.save("Rogelio_Roger_Dela_Cruz_II_Resume.pdf");
  };

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <h3>Rogelio Roger Dela Cruz II</h3>
        <p><strong>Email:</strong> <a href="mailto:arardelacruz55@gmail.com">arardelacruz55@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Captainroger-prog" target="_blank" rel="noopener noreferrer">github.com/Captainroger-prog</a></p>

        <h4>Objective</h4>
        <p>
          Motivated Computer Science student passionate about web and mobile development. Practicing  PHP, Laravel, React JS, and Flutter. Eager to contribute to real-world software projects.
        </p>

        <h4>Education</h4>
        <ul>
          <li>Global College, Tangub City - Bachelor’s in Computer Science</li>
          <li>SHS Mahayag School of Arts and Trade - Senior High School</li>
          <li>Lourmah Elementary School - Elementary School</li>
        </ul>

        <h4>Skills</h4>
        <p>PHP, Laravel, React JS, Flutter</p>

        <h4>Hobbies</h4>
        <p>Reading</p>

        <button onClick={handleDownload} className="btn-download">📄 Download PDF</button>
      </div>
    </section>
  );
};

export default Resume;