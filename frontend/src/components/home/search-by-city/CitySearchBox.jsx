import React, { useEffect, useState } from 'react';
import userLocationCordinates from '../../../utils/userLocationCordinates';
import findNearestCity from '../../../utils/nearestCity';
import { IoIosArrowDown } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { cityCoordinates } from '../../../assets/static/constants';
import styles from './citySearch.module.scss';

const city = Object.keys(cityCoordinates);
const CitySearchBox = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  // get user location or city, ----> iff user allow using GPS then this will provide user current location or city
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const [latitude, longitude, success] = await userLocationCordinates();
        // option is not selected manually and gps is ON
        if (success === true && selectedOption === null) {
          const nearestCity = findNearestCity(latitude, longitude);
          setSelectedOption(nearestCity);
        }
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };
    fetchUserLocation();
    return () => {
      setSelectedOption(null);
    };
    //eslint-disable-next-line
  }, []);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowMenu(false);
  };

  // now

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  // <button className={styles.btnAllDepartment} onMouseEnter={handleHover} onMouseLeave={handleLeave}>

  //

  return (
    <div className={styles.main_container}>
      <div
        className={styles.container}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div>
          <div className={styles.dropdownHeader}>
            {/* icons or location and arrow */}
            <span className={styles[`${showMenu ? 'location-active' : ''}`]}>
              <FaLocationDot />
            </span>
            <span style={{ color: selectedOption ? 'black' : 'grey' }}>
              {selectedOption || 'Select Your City'}
            </span>
            <span className={styles[`arrow ${showMenu ? 'rotate' : ''}`]}>
              <IoIosArrowDown />
            </span>
          </div>
          {showMenu && (
            // manual city selection by user
            <ul className={styles.dropdownList}>
              {city
                .sort((a, b) => a.localeCompare(b))
                .map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitySearchBox;
