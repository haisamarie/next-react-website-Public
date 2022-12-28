import Logo from 'component/logo'
import Nav from 'component/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}
