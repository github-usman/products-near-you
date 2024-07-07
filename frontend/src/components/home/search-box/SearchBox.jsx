import React, { useState } from 'react';
import styles from './search.module.scss';
import { GoSearch } from 'react-icons/go';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const addInputHadler = (e) => {
    e.preventDefault();
    setInput('');
  };
  return (
    <>
      <form onSubmit={addInputHadler} className={styles.container}>
        <input
          type="text"
          value={input}
          className={styles.inputBtn}
          placeholder="Search for products"
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className={styles.searchBtn}
          onClick={addInputHadler}
        >
          <GoSearch className={styles.searchIncon} />
        </button>
      </form>
    </>
  );
};

export default SearchBox;
