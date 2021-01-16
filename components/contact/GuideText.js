import React from "react";

const GuideText = () => {
  const fileName =
    "Strong Advice - Zuby's Guide to Fitness for Everybody (v1.0).pdf";
  const fileToken = "5d9251f1-b9e7-406e-9c95-deb2302c6842";
  return (
    <div className="p-5">
      <h5 className="pt-2 text-center">
        <strong>Write for us!</strong>
      </h5>
      <p>
        If you're interested in writing for us, download our writing guidelines
        below! This will give you a good idea of what we do and what we're
        looking for, and help you decide what you'd like to work on.
      </p>
      <div className="text-center">
        <a
          className="btn btn-outline-primary mb-3"
          href={`https://firebasestorage.googleapis.com/v0/b/ystt-site.appspot.com/o/${fileName}?alt=media&token=${fileToken}`}
          download="guide.pdf"
          target="_blank"
        >
          <i className="fas fa-arrow-down"></i> Download
        </a>
      </div>
      <h5 className="mt-4 pt-2 text-center">
        <strong>Join our Socrates Cafe!</strong>
      </h5>
      <p>
        If you're looking for something less formal, we host a weekly club
        called Socrates Cafe where YSTT members meet up over drinks and talk
        politics, science, philosophy- all that good stuff. Anyone's welcome to
        join and we're always happy to see new faces. Email us for more info!
      </p>
    </div>
  );
};

export default GuideText;
