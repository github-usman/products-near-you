import React from 'react';
import Logo from './header/logo/Logo';

const _404 = () => {
  return (
    <div className="wrapper page__not__found">
      <div className="inner__container">
        <h2>404 Page Not Found</h2>
        <h5>
          The page you are looking for is unavailable. It might have been
          removed, had its name changed or moved.
        </h5>
        <div className="logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default _404;
