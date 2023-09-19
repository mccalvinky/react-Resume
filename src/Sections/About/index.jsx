import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <div className={styles.container2}>
        <p className={styles.index}>01</p>
        <h1 className={styles.heading}>About Me</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            With 16 years of expertise in web development, I bring a wealth of
            experience to crafting cutting-edge, user-friendly websites. My
            skill set includes robust problem-solving abilities and a
            determination to achieve results. I am highly self-motivated and
            unwaveringly dedicated to delivering top-notch work. I maintain a
            strong work ethic, continuously adapting to the latest trends and
            technologies in web development. I am prepared to make a significant
            impact on any organization by creating compelling and visually
            captivating web solutions that drive success.
          </p>
          <p className={styles.desc}>
            I've been raised with a strong work ethic. While I encounter various
            challenges in the process of developing applications, I firmly
            believe there's a solution to every problem. I'm eager to conduct
            research and acquire the necessary knowledge to complete any task
            successfully. I readily admit that I don't possess all the knowledge
            about application development, but I'm committed to giving my utmost
            effort to unravel any complexities that come my way!
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./Images/profile picture.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
