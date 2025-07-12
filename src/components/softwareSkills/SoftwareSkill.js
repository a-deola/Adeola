import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            const {icon: IconComponent, skillName} = skill;
            return (
              <li key={i} className="software-skill-inline" name={skillName}>
                <IconComponent size={24} />
                <p>{skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
