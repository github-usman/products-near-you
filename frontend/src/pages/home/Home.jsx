import React from 'react';
import AllDepartments from '../../components/home/all-departments-btn/AllDepartments';
import SearchBox from '../../components/home/search-box/SearchBox';
import CitySearchBox from '../../components/home/search-by-city/CitySearchBox';
import styles from './home.module.scss';
import HomeHeroSlider from '../../components/home/carousel/HomeHeroSlider';
import GoogleMap from '../../components/home/google-map/GoogleMap';

const Home = () => {
  return (
    <main className={`${styles.container} wrapper`}>
      <div className={styles.home__navbar}>
        <AllDepartments />
        <SearchBox />
        <CitySearchBox />
      </div>
      <section className="wrapper home-hero-section">
        <div className="carousel">
          <HomeHeroSlider />
        </div>
        <GoogleMap />
      </section>
      <article>
        {/* replace city with selectted user  */}
        <h2>Trending Products in Your City</h2>
      </article>
    </main>
  );
};

export default Home;
