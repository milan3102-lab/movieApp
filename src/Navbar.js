import styles from "./Navbar.module.css";


function Navbar(props) {

    const {cartCount}=props;
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>Damn-Movies</div>
          <div className={styles.cartContainer}>
            <img
              alt="Cart Icon"
              src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
              className={styles.cartIcon}
            />
            <div className={styles.cartCount}>{cartCount}</div>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
