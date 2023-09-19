import { useState } from "react";
import Heading from "../../Components/Heading";
import Constant from "../../constant.json";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "./styles.module.css";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="experience">
      <div className={styles.container2}>
        <p className={styles.index}>02</p>
        <h1 className={styles.heading}>Work Experience</h1>
        <div className={styles.line}></div>
      </div>
      {/*<Heading index="02" heading="Work Experience" />*/}
      <div className={styles.container}>
        <div className={styles.left}>
          {Constant.experiences.map((experience, index) => (
            <div
              className={
                index === currentIndex
                  ? `$(styles.active_tab)`
                  : `$(styles.tab)`
              }
              onClick={() => setCurrentIndex(index)}
            >
              {experience.company}
            </div>
          ))}
        </div>
        <div className={styles.right}></div>
        <h1 className={styles.title}>
          {Constant.experiences[currentIndex].title}
          {""}
          <a
            href={Constant.experiences[currentIndex].link}
            target="_blank"
            rel="noreferrer"
          >
            @ {Constant.experiences[currentIndex].company}
          </a>
          <p>{Constant.experiences[currentIndex].duration}</p>
          {Constant.experiences[currentIndex].desc.map((point) => (
            <p className={styles.desc}>
              <PlayArrowIcon /> {point}
            </p>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default Experience;
