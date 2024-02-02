import { SectionTitle } from "../section-title/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN Fluent</span>
        <span>🇫🇷 FR Fluent</span>
        <span>🇧🇷 PT-BR Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓 </span>
        <span>Bachelor’s Degree in Product Engineering (2010-2015)</span>
      </div>
    </div>
  );
}
