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
            Frontend Web Developer at Magalu Cloud (August 2021 - Today)
          </strong>
        </p>
        <p>
          - Developed all the interfaces for an identity management and access
          control platform using React and TypeScript. These interfaces include
          screens for displaying user information such as consent, basic user
          data, and address. The platform is now utilized by more than 800
          clients, with one company indirectly saving +100k reais within a
          single month of adopting this plataform.
        </p>
        <p>
          - Integrated the frontend with the backend by creating JavaScript
          services to connect with the backend API.
        </p>
        <p>
          - Implemented application testing using Jest for unit tests and
          Cypress for end-to-end tests.
        </p>
      </div>
      <div className="projects-2">
        <p>
          <strong>Product Owner at Luizalabs (March 2019 - August 2021)</strong>
        </p>
        <p>
          - Managed backlog, delivery roadmap, and created new functionalities
          to improve the delivery driver experience, such as digitizing and
          implementing a new payment flow for +3000 drivers. This involved
          effective communication across DEV Team, UX, Data, Agile, users, and
          stakeholders.
        </p>
        <p>
          - Coordinated the integration of shipment tracking APIs with logistics
          and developers, resulting in a remarkable 500% increase in the number
          of integrated carriers within a month.
        </p>
        <p>
          - Collaborated with developers to implement sprints for improved
          visibility and results.
        </p>
      </div>
      <div className="projects-3">
        <p>
          <strong>
            Senior Digital Analyst at Luizalabs (September 2018 - February 2019)
          </strong>
        </p>
        <p>
          - Created the checkout indicator (dropout rate) and established
          calculation methods, monitoring, and goal setting.
        </p>
        <p>
          - Specialized in data visualization and presented insights to the
          board of directors.
        </p>
        <p>
          - Collaborated across different teams, including checkout,
          marketplace, and logistics.
        </p>
        <p>
          - Part of the Checkout squad with expertise in conversion optimization
          and digital customer experience.
        </p>
        <p>- Managed project progress using Monday and Trello.</p>
      </div>
     
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:rafaelabonacim@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}
