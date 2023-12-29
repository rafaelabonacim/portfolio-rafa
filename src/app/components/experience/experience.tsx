import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experience.scss";
export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="About Me" />
      <p>
        I&apos;m a passionate front-end developer with a unique journey, with 5
        years of experience in IT and 3 years in Front-End, I thrive when
        I&apos;m tackling complex coding challenges.
      </p>

      <p>
        I graduated in Production Engineer at UNIFEI and after I got many
        programming certificates. I began my career as a Product Owner, where I
        coordinated projects, worked closely with development teams, and learned
        the importance of delivering results. My journey led me to discover my
        true love: programming. Two years ago, I made the transition to the
        front-end development field and never looked back.
      </p>

      <p>
        I have experience with JavaScript, Typescript and React. And for tests,
        I have experience with Cypress and Jest to create engaging and funcional
        interfaces.
      </p>

      <p>
        I have experience with different projects, for example, when I was
        working inh a project that the main goal was developing a platform of
        identity management and access control, I developed all the interfaces
        of this plataform that now, is utilized by more than 800 clients, with
        one company indirectly saving +100k reais within a single month of
        adopting this plataform.
      </p>

      <p>
        I feel that I&apos;m ready for new challenges and I would like to keep
        improving my knowledges and experience with front-end. In long term I
        hope to be a tech lead to be responsible for my own team.
      </p>

      <p>
        I&apos;m also actively looking for an international position as a
        Front-End Developer, so if you are a fellow recruiter or IT colleague, I
        invite you to connect with me.
      </p>

      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/js.png"
            alt="Javascript Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/ts.png"
            alt="Typescript Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
