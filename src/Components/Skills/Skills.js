import "./Skills.css";
import css from "../../images/css.svg";
import node from "../../images/node.svg";
import python from "../../images/python.svg";
import database from "../../images/database.svg";
import js from "../../images/js.svg";
import java from "../../images/java.svg";
import html from "../../images/html.svg";
import react from "../../images/react.svg";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-title-container">
        <div className="skills-title">SKILLS</div>
      </div>
      <div className="skills-card-container">
        <div className="skills-card">
          <div className="skills-icon">
            <img src={react} alt="react icon" />
          </div>
          <div className="skills-card-name">React</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={js} alt="js icon" />
          </div>
          <div className="skills-card-name">JavaScript</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={css} alt="css icon" />
          </div>
          <div className="skills-card-name">CSS3</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={html} alt="html icon" />
          </div>
          <div className="skills-card-name">HTML5</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={database} alt="database icon" />
          </div>
          <div className="skills-card-name">DB handling</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={node} alt="node.js icon" />
          </div>
          <div className="skills-card-name">Node.js</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={java} alt="java icon" />
          </div>
          <div className="skills-card-name">Java</div>
        </div>
        <div className="skills-card">
          <div className="skills-icon">
            <img src={python} alt="python icon" />
          </div>
          <div className="skills-card-name">Python</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
