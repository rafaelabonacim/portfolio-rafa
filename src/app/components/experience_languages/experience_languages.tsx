import Image from "next/image";

import "./experience_languages.scss";
export function ExperienceLanguages() {
  return (
    <div className="experience_languages">
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
