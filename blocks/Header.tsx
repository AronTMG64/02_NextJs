import styles from './Header.module.css'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <Navbar />
    </header>
  );
};

