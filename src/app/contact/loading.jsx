"use client"

import { Loader } from "@/components/loader";
import styles from './page.module.css'


const Loading = () => {
  return ( 
    <div className={styles.loading}>
      <Loader />
    </div>
   );
}
 
export default Loading;