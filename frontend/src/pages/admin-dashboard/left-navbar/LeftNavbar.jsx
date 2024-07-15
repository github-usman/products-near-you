import React from 'react';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FaUserSecret } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logoImg from '../../../assets/media/images/header/logo/logo.png';
import { CiLogout } from 'react-icons/ci';

const LeftNavbar = () => {
  const isOpen = useSelector((state) => state.adminLeftMenu.isOpen);
  const userName = useSelector((state) => state.auth.userName);
  return (
    <nav className={`left__open__navbar__admin_dashboard`}>
      <ul className="nav-list">
        <div className="nav-item logo">
          <img src={logoImg} alt="logo" />
          <h4 className={`${isOpen ? 'open_show' : 'close__hide'}`}>
            Product<span>Near</span>You
          </h4>
        </div>
        <div className="hr-line-admin"></div>
        <li className="nav-item profile">
          <FaUserSecret className="user-icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}>
            {userName}
          </p>
        </li>
        <div className="hr-line-admin"></div>
        <li className="nav-item">
          <MdOutlineAdminPanelSettings className="icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}> Report </p>
        </li>
        <li className="nav-item">
          <MdOutlineAdminPanelSettings className="icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}> Menu 2 </p>
        </li>
        <li className="nav-item">
          <MdOutlineAdminPanelSettings className="icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}> Menu 3 </p>
        </li>
        <li className="nav-item">
          <MdOutlineAdminPanelSettings className="icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}> Menu 4 </p>
        </li>
        <li className="nav-item">
          <MdOutlineAdminPanelSettings className="icon" />
          <p className={`${isOpen ? 'open_show' : 'close__hide'}`}> Menu 5 </p>
        </li>
      </ul>
      <button>
        <CiLogout className="icon" />
        <p className={`${isOpen ? 'open_show' : 'close__hide'}`}>Logout</p>
      </button>
    </nav>
  );
};

export default LeftNavbar;
