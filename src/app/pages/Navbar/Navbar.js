import styles from "./Navbar.module.css";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
        <img src="/cocodrilo.png" alt="logo de cocodrilo" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.search}> 
      <input type="search" placeholder="Buscar" id="Buscador" />
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link href="/Agenda">Agenda</Link>
          <Link href="/Estilos">Estilos</Link>
          <Link href="/Herramientas">Herramientas</Link>
          <Link href="/Recordatorios">Recordatorios</Link>
        </div>
        <div className={styles.linksSesion}>
        <Link href="/login">Iniciar sesión</Link>
        <Link href="/registro">Registrarse</Link>
        </div>
      </div>

    </nav>
  );
}
