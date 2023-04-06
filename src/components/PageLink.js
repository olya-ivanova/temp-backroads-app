import React from "react";

const PageLink = (pageLink, itemClass) => {
  return (
    <li>
      <a href={pageLink.href} className={itemClass}>
        {pageLink.text}
      </a>
    </li>
  );
};

export default PageLink;
