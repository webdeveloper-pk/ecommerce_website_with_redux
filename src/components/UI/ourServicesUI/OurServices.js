import React from "react";
import { faTags, faThumbsUp, faUndo } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service.js";
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={styles.services}>
      <Service
        icon={faTags}
        heading="BEST DEAL ONLINE"
        description="Discount off the weekly rate for monthly"
      />
      <Service
        icon={faThumbsUp}
        heading="TOP QUALITY"
        description="Service Quality and Customer Satisfaction"
      />
      <Service
        icon={faUndo}
        heading="15 DAYS RETURN"
        description="Cancel and return your order within 15 days"
      />
    </div>
  );
};

export default OurServices;
