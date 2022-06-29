import styles from "./manset.module.scss";
import Image from "next/image";

export default function Manset() {
    return (
        <div  className={styles.manset}>
            <div className={styles.textContent}>
                <div>
                    <span>SET A WEBSITE FOR</span>
                    <div className={styles.first}>
                        <b> CAR SERVICE </b>
                        <div> IN-ONE-CLICK </div>
                    </div>
                </div>
            </div>
            <img 
                src="/assets/images/manset.png" 
                alt="Picture of the author"
            />
        </div>
    )
}
