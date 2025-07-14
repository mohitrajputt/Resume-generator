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
              Developed real-time chat and notification features using WebSocket, and converted core
              features (chat, notifications, feed) into reusable private NPM packages.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Built and optimized scalable Next.js applications with a strong focus on performance,
              modular architecture, and code splitting, reducing bundle size by 30% through
              optimized code splitting and lazy loading.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              Designed responsive feed components with like, comment, share, and view functionality,
              leveraging React Query and Redux Toolkit for efficient state and data management
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
              Daily responsibilities included design and developing user Interface as a full‑stack
              developer.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>React.js & Git Collaboration:</strong> Led front‑end development for multiple
              projects using React.js, HTML, and CSS, leveraging Git for version control and team
              collaboration.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>Responsive Web Design:</strong> Developed mobile‑first designs to enhance user
              experience across devices.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>Agile Workflow:</strong> Worked in sprints using Jira, effectively managing
              tasks and deliverables.
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
              Codial — <i>Full Stack</i>
            </a>
          </h3>
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>Social Media Platform:</strong> Developed a React‑based social networking
              platform featuring OAuth login, real‑time chat, and a responsive user interface.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>Interactive Features:</strong> Implemented features like posting, commenting,
              and friend‑adding to foster user engagement and social interaction.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h3>
            <a href="https://mohitrajputt.github.io/Busy_Buy/">
              Busy Buy — <i>Front End</i>
            </a>
          </h3>
          <ul>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>E‑commerce Platform:</strong> Developed a full‑stack e‑commerce application
              with dynamic routing, authentication, and Firestore integration using React.js and
              Firebase.
            </li>
            <li contentEditable={true} suppressContentEditableWarning={true}>
              <strong>CRUD Operations:</strong> Built robust CRUD functionality to handle user data,
              products, and orders, achieving a high score of 490/500 from Coding Ninjas.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Programming Language:</strong> Javascript | Typescript | C | C++ | Python |
            jQuery
          </li>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Technologies:</strong> React | Next | Angular | Node | Express | MongoDB | Git
          </li>
          <li contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Tools & Platforms</strong> Firebase | AWS | Jenkins | Postman | Bitbucket | Jira
            | Zoho
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
            <p className="job-dates">Dec 2020 – July 2024</p>
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
