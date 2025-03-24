import { Spacer, TitleWithSubtext } from "components";
import { Container } from "react-bootstrap";

export const Experience = () => {
  return (
    <Container>
      <h1>Experience</h1>

      <Spacer size="sm" />

      <h2>Work experience</h2>
      <TitleWithSubtext title="Vsceptre Limited" subtext="Hong Kong" />
      <p>Solution Consultant (Sep 2024 - Present)</p>
      <ul>
        <li>
          Led development of internal tools and applications, such as an RAG chatbot connected to our internal SharePoint using React.js and Python,
          and setting up internal CI/CD pipelines in GitHub using GitHub actions from scratch.
        </li>
        <li>
          Successfully delivered tailored solutions for observability, DevOps and AI related projects for clients in the betting and retail industries, resulting
          in the successful adoption of our products by the clients and also renewals of our contracts.
        </li>
        <li>
          Led valuations of emerging AI technologies, such as low-code AI platforms, AI governance and Agentic systems.
        </li>
      </ul>

      <TitleWithSubtext title="National Australia Bank" subtext="Melbourne, Australia" />
      <p>
        Analyst Engineer (May 2024 - Aug 2024)<br/>
        Associate Engineer (Jul 2023 - Apr 2024)<br/>
        Intern Software Engineer (Jan 2023 - Jul 2023)
      </p>
      <ul>
        <li>
          Led a team of 8 frontend developers for the end-to-end delivery of 3 out of 4 micro frontends for NAB Portal Pay, a greenfield real estate payment platform 
          for NAB's business customers which allowed the bank to compete with established platforms in the market. 
        </li>
        <li>
          Developed and maintained micro frontends for term deposit related applications, resulting in an increase of around 20% in using digital channels for
          term deposit management for the bank's customers. 
        </li>
        <li>
          Acted as the bridge between the development team and various key stakeholders, including product owners, solution architects, UI/UX designers,
          other development teams and release train engineers to ensure smooth delivery of features and to provide feedback on technical feasibility.
        </li>
        <li>
          Increased test coverage by 50% to more than 95% coverage by refactoring legacy code and writing unit tests using react-testing-library and end-to-end 
          tests using Cypress, ensuring that the application is easier to maintain.
        </li>
        <li>
          Key maintainer for CI/CD issues on Jenkins and Harness for the team, ensuring that the code passes through automated tests, code scanning and deployment pipelines
          so that the team's velocity is minimally impacted.
        </li>
        <li>
          Provided SIT and on-call production support for the team's applications for defect triaging, and incident management and resolution.
        </li>
      </ul>

      <Spacer size="sm" />

      <h2>Education</h2>
      <TitleWithSubtext title="Master of Computer Science" subtext="Feb 2021 - Dec 2022" />
      <p>University of Melbourne</p>
      <ul>
        <li>
          Weighted Average Mark: 86.5 (First Class Honours)
        </li>
        <li>
          Thesis: Quantum Generative Adversarial Networks for Image Generation
        </li>
        <li>
          Courses: Machine Learning, AI Planning, Quantum Computing, Theoretical Computer Science, Research Methods
        </li>
      </ul>

      <TitleWithSubtext title="Master of Software Engineering (Withdrawn)" subtext="Feb 2020 - Dec 2020" />
      <p>University of Melbourne</p>
      <ul>
        <li>
          Weighted Average Mark: 85.0 (First Class Honours)
        </li>
        <li>
          Transferred to Master of Computer Science
        </li>
        <li>
          Courses: Object-Oriented Programming, Data Structures and Algorithms, Databases, Software Design, Declarative Programming
        </li>
      </ul>

      <TitleWithSubtext title="Bachelor of Science" subtext="Feb 2017 - Dec 2019" />
      <p>University of Melbourne</p>
      <ul>
        <li>
          Major: Mathematical Physics
        </li>
        <li>
          Courses: Linear Algebra, Group Theory, Real and Complex Analysis, Differential Equations and Vector Calculus, Quantum Physics, Electrodynamics, Statistical Physics
        </li>
      </ul>

      <Spacer size="sm" />

      <h2>Skills</h2>
      <ul>
        <li>
          <span className="fw-bold">Programming Languages:</span> TypeScript / JavaScript (Proficient), Python (Proficient), Java (Familiar), C (Familiar)
        </li>
        <li>
          <span className="fw-bold">Frameworks and Libraries:</span> React.js, Node.js, HTML, CSS, GraphqQL, Express, Nginx, Redux, Jest, React Testing Library, Cypress, Flask 
        </li>
        <li>
          <span className="fw-bold">Tools and Platforms:</span> Git, GitHub, GitHub Actions, Jenkins, Harness, Docker, Ansible, AWS, Elasticsearch, SonarQube, Splunk, Kong Gateway
        </li>
      </ul>
    </Container>
  );
};