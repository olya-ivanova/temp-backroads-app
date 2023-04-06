import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((pageLink) => {
        return (
          <PageLink
            key={pageLink.id}
            pageLink={pageLink}
            itemClass={itemClass}
          />
          // <li key={pageLink.id}>
          //   <a href={pageLink.href} className={itemClass}>
          //     {pageLink.text}
          //   </a>
          // </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
