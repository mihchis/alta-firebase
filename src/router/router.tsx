import React from 'react';
import { useRoutes } from 'react-router-dom';
import ForGotPass from '../pages/login/forgotpass';
import Login from '../pages/login/login';
import TeamlateUser from '../pages/login/teamlateuser';
import img1 from '../assets/icons/img1.png';
import img2 from '../assets/icons/Frame.png';
import NewPass from '../pages/login/newpass';
import Teamplate from '../pages/template';
import Info from '../pages/form/infor';
import HeaderInform from '../pages/form/header';
import DashboardMain from '../pages/dashboard/dashboard';

import DeviceManager from '../pages/equi/manager';
import ProtectedRouters from '../ProtectedRouters';
import TeamplateFormAdd from '../pages/teamplateformadd';
import AccountManager from '../pages/manager/acc/manager';
const Router = () => {
    let routes = useRoutes([
      {
        path: '/',
        element: (
          <TeamlateUser pic={img1} tittle="Quản lí xếp hàng">
            <Login />
          </TeamlateUser>
        ),
      },
      // user
      {
        path: '/user',
        children: [
          {
            path: 'forgotPass',
            element: (
              <TeamlateUser pic={img2}>
                <ForGotPass />
              </TeamlateUser>
            ),
          },
          {
            path: 'newPass',
            element: (
              <TeamlateUser pic={img2}>
                <NewPass />
              </TeamlateUser>
            ),
          },
          // { path: "", element: <PageLogin /> },
        ],
      },
      {
        element: <ProtectedRouters />,
        children: [
          {
            path: '/dashboard',
            element: (
              <Teamplate>
                <HeaderInform title="Thông tin cá nhân" bgcolorright="#fff" />
                <DashboardMain />
              </Teamplate>
            ),
          },
          {
            path: '/info',
            element: (
              <Teamplate>
                <Info />
              </Teamplate>
            ),
          }, // // equipment
          {
            path: '/equipment',
            children: [
              {
                path: 'add',
                element: (
                  <Teamplate>
                    <HeaderInform
                      title="Thêm thiết bị"
                      task={['Thiết bị', 'Danh sách thiết bị', '']}
                      contentMain="Danh sách thiết bị"
                    />
                    <TeamplateFormAdd />
                  </Teamplate>
                ),
              },
              // {
              //   path: 'detailRandom',
              //   children: [{ path: ':id', element: <RandomDetail /> }],
              // },
              {
                path: 'update',
                children: [
                  {
                    path: ':id',
                    element: (
                      <Teamplate>
                        <HeaderInform
                          title="Cập nhật thiết bị"
                          task={['Thiết bị', 'Danh sách thiết bị', '']}
                          contentMain="Quản lý thiết bị"
                        />
                        <TeamplateFormAdd update />
                      </Teamplate>
                    ),
                  },
                ],
              },
              {
                path: '',
                element: (
                  <Teamplate>
                    <HeaderInform
                      title="Danh sách thiết bị"
                      task={['Thiết bị', '']}
                      contentMain="Danh sách thiết bị"
                    />
                    <DeviceManager />
                  </Teamplate>
                ),
              },
            ],
          },
          {
            path: '/manage',
            children: [
              {
                path: 'account',
                children: [
                  {
                    path: '',
                    element: (
                      <Teamplate>
                        <HeaderInform
                          title="Quản lý tài khoản"
                          task={['Cài đặt hệ thống', '']}
                          contentMain="Danh sách tài khoản"
                        />
                        <AccountManager />
                      </Teamplate>
                    ),
                  },
                ],
              },
            ],
          },
          {
            path: '*',
            element: '404 not found',
          },
        ],
      },
    ]);
    return routes;
  };
  
  export default Router;