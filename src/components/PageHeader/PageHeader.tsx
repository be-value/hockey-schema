import * as React from "react";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.css";


const PageHeader: React.SFC<IPageHeaderProps> = (props) => {  

  return (
    <header className={styles.AppHeader}>
      <p>{props.title}</p>
    </header>);
};

export default PageHeader;
