import React from 'react';
import AllDepartments from '../../components/home/all-departments-btn/AllDepartments';
import SearchBox from '../../components/home/search-box/SearchBox';
import CitySearchBox from '../../components/home/search-by-city/CitySearchBox';
import HomeHeroSlider from '../../components/home/carousel/HomeHeroSlider';
import GoogleMap from '../../components/home/google-map/GoogleMap';
import AllProducts from '../../components/home/list-all-products/AllProducts';

const Home = () => {
  return (
    <main className="home__container wrapper">
      <div className="home__navbar">
        <AllDepartments />
        <SearchBox />
        <CitySearchBox />
      </div>
      <section className="home-hero-section">
        <div className="carousel">
          <HomeHeroSlider />
        </div>
        <GoogleMap />
      </section>
      <article className="home__trending__products">
        {/* replace city with selectted user  */}
        <h2>Trending Products in Your City</h2>
        <AllProducts />
      </article>
    </main>
  );
};

export default Home;
