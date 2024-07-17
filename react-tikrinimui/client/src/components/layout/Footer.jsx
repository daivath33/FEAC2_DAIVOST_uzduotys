import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.text}>Home Services {new Date().getFullYear()}  &copy; All rights reserved</p>
    </footer>
  )
}

export default Footer