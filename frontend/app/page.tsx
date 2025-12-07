import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <h1>Welcome to Muay Thai Manager</h1>
      <p>This is the home page of the Muay Thai Manager application.</p>
      <a href="/login">Login</a>
      <a>alunos</a>
    </div>
  );
}
