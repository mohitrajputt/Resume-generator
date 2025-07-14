import styles from "../template2.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Template2 = () => {
  return (
    <div className={styles.resumeCont}>
      <div className={styles.introSection}>
        <div className={styles.topCont}>
          <div className={styles.socialIcons}>
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        <div className={styles.bottomCont}>
          <div className={styles.leftCont}>
            <p className={styles.nameCont}>Mohit Rajput</p>
            <p className={styles.titleCont}>Front End Developer</p>
          </div>
          <div className={styles.rightCont}>
            <div className={styles.connectLinksCont}>
              <p>+91 9997656397</p>
              <p>999MohitRajput@gmail.com</p>
            </div>
            <div className={styles.connectLinksCont}>
              <p>https://mohitrajputt.github.io/Portfolio/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
