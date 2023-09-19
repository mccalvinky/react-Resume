import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Kevin Scott</h1>
      <h1 className={styles.heading_2}>Web Developer</h1>
      <p className={styles.desc}>
        Experienced Web Developer with 16 years of experience in developing
        innovative and user-friendly websites. Strong problem-solving skills and
        a result-oriented mindset. Self-motivated and dedicated to delivering
        high-quality work. Hardworking and committed to staying up-to-date with
        the latest web development trends and technologies. Ready to contribute
        to the success of any organization by creating impactful and visually
        appealing web solutions.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
