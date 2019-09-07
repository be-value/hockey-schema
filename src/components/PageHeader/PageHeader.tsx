import * as React from "react";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.css";
import preval from "preval.macro";

function formatDate(buildtime: any): string {
  var timestamp: Date = new Date(buildtime);
  var dd: number = timestamp.getDate();
  var MM: number = timestamp.getMonth()+1; // january = 0
  var YY: number = timestamp.getFullYear();
  var HH: number = timestamp.getHours();
  var mm: number = timestamp.getMinutes();
  var ss: number = timestamp.getSeconds();
  return `${dd}-${MM}-${YY} ${HH}:${mm}:${ss}`;
}

const PageHeader: React.SFC<IPageHeaderProps> = (props) => {
  const dateTimeStamp: any = preval`module.exports = new Date();`;

  return (
    <header className={styles.AppHeader}>
      <p>{props.title}<br/>
        <span>versie: {formatDate(dateTimeStamp)}</span>
      </p>
  </header>  );
};

export default PageHeader;
