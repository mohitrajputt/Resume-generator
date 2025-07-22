// import { Linkedin, Github } from "lucide-react";
import styles from "../template3.module.css";

const Template3 = () => {
  return (
    <main className={styles.resume}>
      {/* Header */}
      <header className={styles["flex-between"]}>
        <div>
          <p className={styles.name}>Mohit Rajput</p>
          <p className={styles.title} contentEditable={true} suppressContentEditableWarning={true}>
            Software Developer
          </p>
        </div>

        <div className={styles.contact}>
          <div className="icons">
            <a href="https://www.linkedin.com/in/your-profile" aria-label="LinkedIn">
              {/* <Linkedin /> */}
            </a>
            <a href="https://github.com/your-github" aria-label="GitHub">
              {/* <Github /> */}
            </a>
          </div>
          <p>📞 +91&nbsp;9997665397</p>
          <p>
            <a href="mailto:999MohitRajput@gmail.com">
              <span>📧</span> 999MohitRajput@gmail.com
            </a>
          </p>
          <p>
            <a href="https://mohitrajputt.github.io/Portfolio/">
              🌐 https://mohitrajputt.github.io/Portfolio/
            </a>
          </p>
        </div>
      </header>
      <div className={styles.headerBottom}></div>
      {/* Experience */}
      <section>
        <h2 className={styles.heading}>
          {" "}
          <b>E</b>xperience
        </h2>

        {/* Job 1 */}
        <div>
          <div className={styles["flex-between"]}>
            <span>
              <strong>Software Development Engineer-1 </strong>— <i>Tech Matpatra </i>
            </span>
            <p className="job-dates">July 2024 – Present</p>
          </div>

          {/* Built and optimized scalable Next.js applications with a strong focus on performance, modular architecture, and code splitting.
Developed real-time chat and notification features using WebSocket, and converted core features (chat, notifications, feed) into reusable private NPM packages.
Designed responsive feed components with like, comment, share, and view functionality, leveraging React Query and Redux Toolkit for efficient state and data management. */}
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Engineered real-time chat and notification systems using WebSocket; modularized core
              features (chat, notifications, feed) into reusable private NPM packages to streamline
              development across projects.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Built and optimized high-performance Next.js applications with modular architecture,
              reducing bundle size by 30% through strategic code splitting and lazy loading.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Developed responsive, interactive feed components with like, comment, share, and view
              features, utilizing React Query and Redux Toolkit for robust state and data
              management.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div>
          <div className={styles["flex-between"]} style={{ marginTop: "1rem" }}>
            <span>
              <strong>Web Developer Intern</strong> — <i>Dabotics India</i>
            </span>
            <p className="job-dates">July 2023 – Sep 2023</p>
          </div>

          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Developed responsive UI components using React.js, HTML, and CSS for multiple web
              applications.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Contributed to team projects using Git for version control and collaborative
              development.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Created mobile-first layouts to ensure consistent user experience across all screen
              sizes.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Worked in Agile sprints with Jira to track progress, manage tasks, and meet deadlines.
            </li>
          </ul>
        </div>
      </section>
      {/* Projects */}
      <section>
        <h2 className={styles.heading}>
          <b>S</b>oftware <b>P</b>rojects
        </h2>

        <div>
          <h3>
            <a href="https://github.com/mohitrajputt/codeial">
              Codial — <i>Full Stack Social Media Platform</i>
            </a>
          </h3>
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Built a React-based social platform with OAuth login, real-time chat, and a fully
              responsive UI.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Implemented interactive features including post creation, comments, and friend
              requests to drive engagement.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h3>
            <a href="https://mohitrajputt.github.io/Busy_Buy/">
              Busy Buy — <i>Frontend E-commerce Application</i>
            </a>
          </h3>
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Developed a fully responsive e-commerce interface using React.js with dynamic routing
              and component-based architecture.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Integrated Firebase Authentication and Firestore to manage secure user login, product
              data, and real-time order updates.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Implemented complete CRUD operations for users, products, and orders; project scored
              490/500 from Coding Ninjas for UI and functionality.
            </li>
          </ul>
        </div>
      </section>
      {/* Skills */}

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Languages:</strong> JavaScript, TypeScript, Python, C, C++, jQuery
          </li>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Frontend:</strong>React, Next.js, Angular, HTML, CSS
          </li>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Backend & DB: </strong>Node.js, Express, MongoDB, Firebase
          </li>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Tools: </strong>Git, AWS, Jenkins, Postman, Bitbucket, Jira, Zoho
          </li>
        </ul>
      </section>
      {/* Education */}
      <section>
        <h2 className={styles.heading}>
          <b>E</b>ducation
        </h2>
        <div>
          <div className={styles["flex-between"]} style={{ marginTop: "1rem" }}>
            <strong>Dr. A.P.J. Abdul Kalam Technical University, Lucknow India</strong>
            <p className="job-dates">December 2020 – July 2024</p>
          </div>
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              B.Tech in Computer Science and Engineering (CSE)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Template3;
