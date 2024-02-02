import { EmailIcon } from "../icons/email-icon";
import { SectionTitle } from "../section-title/section-title";
import { SocialBtns } from "../social-btns/social-btns";
import "./projects.scss";

export function Projects() {
  return (
    <div className="projects">
      <SectionTitle text="Experiences" />
      <div className="projects-1">
        <p>
          <strong>
            Frontend Web Developer at Magalu Cloud (August 2021 - current)
          </strong>
        </p>
        <p>
          - Developed all the interfaces for an identity management and access
          control platform using React and TypeScript. These interfaces include
          screens for displaying user information such as consent, basic user
          data, and address. The platform is now utilized by more than 800
          clients, with one company indirectly saving +25.000 U$D within a
          single month of adopting this platform.
        </p>
        <p>
          - Integrated the front-end with the back-end by creating JavaScript
          services to connect with the back-end API.
        </p>
        <p>
          - Implemented application testing using Jest for unit tests and
          Cypress for end-to-end tests.
        </p>
      </div>
      <div className="projects-2">
        <p>
          <strong>
            Senior Data Analyst / Promoted to Product Owner (2018 - 2021)
          </strong>
        </p>
        <p>
          - Managed backlog, delivery roadmap, and created new functionalities
          to improve the delivery courier experience, such as digitizing and
          implementing a new payment flow for +3000 couriers. Involving
          effective communication across Dev Team, UX, Data, Agile, users and
          stakeholders.
        </p>
        <p>
          - Coordinated the integration of shipment tracking APIs with logistics
          and development sectors, resulting in a remarkable 500% increase in
          the number of integrated couriers within a month.
        </p>
        <p>
          - Analysed data for a delivery app, using SQL and Google Analytics.
        </p>
      </div>
      <div className="projects-3">
        <p>
          <strong>Senior Data Analyst at B2W - Americanas (2017 - 2018)</strong>
        </p>
        <p>
          - Worked with data-driven programming, using SQL and data analysis
          systems, such as Adobe Analytics.
        </p>
        <p>
          - Responsible for identifying problems through numerical analysis and
          analyzing the performance of the conversion funnel to prioritize
          projects for an improved user experience and increased conversion.
        </p>
      </div>

    </div>
  );
}
