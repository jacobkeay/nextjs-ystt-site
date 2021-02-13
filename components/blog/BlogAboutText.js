import React from "react";

const BlogAboutText = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex justify-content-center align-items-center rounded-circle bg-cortado backdrop-cortado text-center">
          <img src="/cortado-logo.jpg" height="150" alt="logo here"></img>
        </div>
      </div>
      <h1 className="py-5 text-center">About the Cortado Journal</h1>
      <h5 className="pt-2">
        <strong>What is the Cortado Journal?</strong>
      </h5>
      <p className="pl-3">
        The Cortado Journal is a weekly rundown on current affairs. It looks at
        news from around the world and from every angle of the political
        spectrum in a clear, concise, and engaging style.
      </p>
      <h5 className="pt-2">
        <strong>What do we write about?</strong>
      </h5>
      <p className="pl-3">
        We cover major developments in international politics as well as
        interesting stories from different parts of the globe, and sometimes we
        offer short opinion pieces on current events.
      </p>
      <h5 className="pt-2">
        <strong>How often do we publish?</strong>
      </h5>
      <p className="pl-3">We publish once a week during term-time.</p>
      <h5 className="pt-2">
        <strong>How can I get involved?</strong>
      </h5>
      <p className="pl-3">
        Check out our "Get Involved" page and download our writing guide!
      </p>
    </div>
  );
};

export default BlogAboutText;
