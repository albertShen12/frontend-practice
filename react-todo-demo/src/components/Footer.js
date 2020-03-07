import React, { useEffect } from "react";

const Footer = props => {
  const githubLink = "https://github.com/albertShen12/frontend-practice";
  return (
    <footer id="app-footer">
      <div className="width-wall">
        github地址:
        <a href={githubLink}>{githubLink}</a>
      </div>
    </footer>
  );
};

export { Footer as default };
