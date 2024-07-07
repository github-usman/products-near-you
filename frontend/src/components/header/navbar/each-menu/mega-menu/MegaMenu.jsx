import vegetablesBucket from '../../../../../assets/media/images/header/navbar-menus/vegetables-bucket.png';
import { Link } from 'react-router-dom';
import styles from './mega-menu.module.scss';

const MegaMenu = () => {
  return (
    <div className={`${styles.mega__menu} ${styles.wrapper}`}>
      <div className={styles.megaMenuList}>
        <p>Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={styles.megaMenuList}>
        <p>Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={styles.megaMenuList}>
        <p>Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <img src={vegetablesBucket} alt="Vegetables bucket for mega menu" />
    </div>
  );
};

export default MegaMenu;
