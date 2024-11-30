import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <h1>Mercado Clon</h1>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
          <img src="/src/assets/search.svg" width={25} color="#ededed"></img>
          </button>
        </div>
      </div>
      <nav className={styles.navBar}>
        <span>Enviar a usuario</span>
        <ul className={styles.navLinks}>
          <li>Categorías</li>
          <li>Ofertas</li>
          <li>Cupones</li>
          <li>Supermercado</li>
          <li>Moda</li>
          <li>Mercado Play</li>
          <li>Vender</li>
          <li>Ayuda</li>
        </ul>
        {/* <div className={styles.icons}>
          <div className={styles.icon}>👤</div>
          <div className={styles.icon}>🛒</div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
