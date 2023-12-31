import React from "react";
/*import CV from '../../assets/kavya-paliwal-resume-docx';*/
import CV from '../../assets/kavya-paliwal.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
