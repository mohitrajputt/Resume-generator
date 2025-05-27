import styles from "../template1.module.css";

const Template1 = () => {
  return (
    <div className={styles.resumeCont}>
      <div className={styles.introSec}>
        <div className={styles.heading1}>
          Mohit Rajput
          <a href="https://mohitrajputt.github.io/Portfolio/">
            <img src="external.png" width={23} height={23} className={styles.externalLink} />
          </a>
        </div>
        <div className={styles.nameContent}>
          <div
            className={styles.sectionTitle}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            Software Developement Engineering
          </div>
          <div className={`${styles.listTitle} ${styles.flex}`}>
            <p>Gudgaon, India</p>
            <p>
              <a href="tel:+919997656397">• +91 9997656397</a>
            </p>
            <p>
              <a href="mailto:999mohitrajput@gmail.com">• 999mohitrajput@gmail.com</a>
            </p>
            <p className={styles.pointer}>
              <a href="https://www.linkedin.com/in/mohit-rajput-2789a0215/" target="_blank">
                • linkedin.com/in/mohit-rajput-2789a0215/
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        Mohit Rajput +91 9997656397 999mohitrajput@gmail.com linkedin.com/in/mohit-rajput-2789a0215/
        Software Development Engineer Tech Matpatra, July 2024 - Present, Software Developer
        Engineer@1 Dabotics India, July 2023 - Sep 2023, Web Developer Intern Busy Buy -
        https://mohitrajputt.github.io/Busy_Buy/ Photofolio -
        https://mohitrajputt.github.io/photofolio/ Dr. A.P.J. Abdul Kalam Technical University,
        B.TECH Computer Science & Engineering, 2020-2024 Skills: Jira, Zoho, Jenkins, Firebase,
        HTML5, CSS3, JavaScript, React, Redux, etc.
      </div>
      <section className={styles.experience}>
        <div className={styles.heading1}>EXPERIENCE</div>
        <>
          <div className={styles.subHeadingCont}>
            <div className={`${styles.heading2} ${styles.customWeight}`}>Tech Matpatra</div>
            <div className={styles.subHeading}>
              July 2024 - <em>Present</em>
            </div>
          </div>
          <div className={styles.subContTitle}>Software Developer Engineer@1</div>
          <div className={styles.itemsCont}>
            <ul>
              <li>
                Built and optimized scalable Next.js applications with a strong focus on
                performance, modular architecture, and code splitting.
              </li>
              <li>
                Developed real-time chat and notification features using WebSocket, and converted
                core features (chat, notifications, feed) into reusable private NPM packages.
              </li>
              <li>
                Designed responsive feed components with like, comment, share, and view
                functionality, leveraging React Query and Redux Toolkit for efficient state and data
                management.
              </li>
            </ul>
          </div>
        </>
        <>
          <div className={styles.subHeadingCont}>
            <div className={`${styles.heading2} ${styles.customWeight}`}>Dabotics India</div>
            <div className={styles.subHeading}>
              July 2023 - <em>Sep 2023</em>
            </div>
          </div>
          <div className={styles.subContTitle}>Web Developer Intern</div>
          <div className={styles.itemsCont}>
            <ul>
              <li>
                Daily responsibilities include design and developing user Interface using React.js,
                HTML, and CSS, leveraging Git for version control and team collaboration.
              </li>
              <li>Developed mobile-first designs to enhance user experience across devices</li>
            </ul>
          </div>
        </>
      </section>{" "}
      <section className={styles.experience}>
        <div className={styles.heading1}>SOFTWARE PROJECTS</div>
        <>
          <div className={styles.subHeadingCont}>
            <div className={`${styles.heading2} ${styles.customWeight}`}>
              <a href="https://mohitrajputt.github.io/Busy_Buy/" target="_blank">
                Busy Buy
              </a>
            </div>
          </div>
          <div className={styles.subContTitle}>
            HTML | CSS | JavaScript | React | Redux | Firebase | API-axios
          </div>
          <div className={styles.itemsCont}>
            <ul>
              <li>
                <strong>E-commerce Platform:</strong> Developed a full-stack e-commerce application
                with dynamic routing, authentication, and Firestore integration using React.js and
                Firebase.
              </li>
              <li>
                <strong>CRUD Operations:</strong> Built robust CRUD functionality to handle user
                data, products, and orders, achieving a high score of 490/500 from Coding Ninjas
              </li>
            </ul>
          </div>
        </>
        <>
          <div className={styles.subHeadingCont}>
            <div className={`${styles.heading2} ${styles.customWeight}`}>
              <a href="https://mohitrajputt.github.io/photofolio/" target="_blank">
                Photofolio
              </a>
            </div>
          </div>
          <div className={styles.subContTitle}>
            HTML | CSS | JavaScript | React | Context API | Firebase
          </div>
          <div className={styles.itemsCont}>
            <ul>
              <li>
                <strong>Online Photo Album:</strong>A full-featured photo management application
                that allows users to upload, organize, and share their digital photos.
              </li>
              <li>
                <strong>Image Upload & Viewer:</strong> Built a web application that allows users to
                upload, view, organize, and share their digital photos. Includes an image viewer and
                full CRUD functionality (upload, update, delete, view).
              </li>
            </ul>
          </div>
        </>
      </section>
      <section className={styles.experience}>
        <div className={styles.heading1}>EDUCATION</div>
        <>
          <div className={styles.subHeadingCont}>
            <div className={`${styles.heading2} ${styles.customWeight}`}>
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow India
            </div>
            <div className={styles.subHeading}>
              July 2020 - <em>July 2024</em>
            </div>
          </div>
          <div className={styles.subContTitle}>B.TECH | Computer Science & Engineering</div>
          {/* <div className={styles.itemsCont}>
            <p className={styles.paraCont}>
              <b>Coursework:</b>
              Data Structures and Algorithms, Discrete Mathematics, Operating Systems, Computer
              Networks, Databases, Artificial Intelligence, Software Engineering, Scalability.{" "}
            </p>
          </div> */}
        </>
      </section>
      <section className={styles.experience}>
        <div className={styles.heading1}>SKILLS</div>
        <div className={styles.skillsCont}>
          <div>
            <div className={styles.skillsHeading}>Tools & Platforms:</div>
            <div className={styles.skillsContent}>Jira, Zoho, Jenkins, Firebase</div>
          </div>
          <div>
            <div className={styles.skillsHeading}>Languages & Frameworks:</div>
            <div className={styles.skillsContent}>
              HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Redux, Next, <br />
              Angular, C/C++, Python, Jquery, Node Js, Express Js, Mongo DB, Firebase
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template1;
