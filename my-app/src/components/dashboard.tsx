import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import { navLists } from '../assets/dummydata/dashBoardData';
import Button from './button';
import { useDispatch } from 'react-redux';
import userSlice from '../pages/user/userSlice';

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // data.setLoggedIn(false);
    dispatch(
      // reset initalstate
      userSlice.actions.userLogoutSucc({
        isLogginSucc: false,
        idAcount: '',
        isLogginErr: true,
        forgotPass: false,
        IDemailAccount: '',
      })
    );
    navigate('/');
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="dashboard-list">
          {navLists.map((item) => (
            <NavLink
              to={`/${item.path}`}
              className={({ isActive }) =>
                isActive ? 'active dashboard-list_item' : 'dashboard-list_item '
              }
              key={`dashboard-${item.path}`}
            >
              <img src={item.icon} alt="" />
              <span className="dashboard-list_content">{item.display}</span>
              {item.childrens ? (
                <>
                  <i className="bx bx-dots-vertical-rounded dashboard-list_setting"></i>
                  <ul className="dashboard-list2">
                    {item.childrens.map((child) => (
                      // <NavLink
                      //   // to={child.path}
                      //   // className={({ isActive }) =>
                      //   //   isActive ? 'active ' : ''
                      //   // }
                      //   key={child.path}
                      // >
                      <li
                        key={child.display}
                        onClick={() => navigate(child.path)}
                      >
                        {child.display}
                      </li>
                      // </NavLink>
                    ))}
                  </ul>
                </>
              ) : (
                ''
              )}
              {/* {item.childrens && (
                <ul className="dashboard-list2">
                  {item.childrens.map((child) => (
                    <li
                      // to={child.path}
                      // className={({ isActive }) => (isActive ? 'active ' : '')}
                      key={child.path}
                    >
                      <li key={child.display}>{child.display}</li>
                    </li>
                  ))}
                </ul>
              )} */}
            </NavLink>
          ))}

          <div className="dashboard-logout" onClick={handleLogout}>
            {/* <Link to="/" onClick={() => handleLogout()} key="logout"> */}
            <Button
              buttonSize="btn--XL"
              type="button"
              buttonStyle="btn--warning--solid"
            >
              <i className="bx bx-log-out dashboard-logout_icon"></i>
              <span className="dashboard-logout_content">Đăng xuất</span>
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;