import React from 'react';
import { useRoutes } from 'react-router-dom';
import ForGotPass from '../pages/user/forgotpass';
import Login from '../pages/user/login';
import TeamlateUser from '../pages/user/teamplateuser';
import img1 from '../assets/icons/pic1.png';
import img2 from '../assets/icons/Frame.png';
import NewPass from '../pages/user/newpass';
import Teamplate from '../pages/teamplate';
import Info from '../pages/form/info';
import HeaderInfo from '../pages/form/header';
import DashboardMain from '../pages/dashboard/main';

import DeviceManager from '../pages/equi/manager';
import ProtectedRouters from '../ProtectedRouters';

import AccountManager from '../pages/manager/account/manager';

import AddAccount from '../pages/manager/account/addaccount';
import TeamplateFormAdd from '../pages/teamplateformadd';
import TeamplateFormDetail from '../pages/equi/teamplateformdetail';
import { EquipSelector, RandomSelector } from '../redux/selector';
import { useSelector } from 'react-redux';
import ServiceManager from '../pages/service/manager';
import TeamplateFormService from '../pages/service/teamplateformservice';
import TeamplateFormDetailService from '../pages/service/teampllateformdetailservice';
import RandomManager from '../pages/capso/manager';
import AddRandom from '../pages/capso/add';

const Router = () => {
  const equipment = useSelector(EquipSelector);
  const Random = useSelector(RandomSelector);

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
              <HeaderInfo title="Thông tin cá nhân" bgcolorright="#fff" />
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
                  <HeaderInfo
                    title="Thêm thiết bị"
                    task={['Thiết bị', 'Danh sách thiết bị', '']}
                    contentMain="Danh sách thiết bị"
                  />
                  <TeamplateFormAdd />
                </Teamplate>
              ),
            },
            {
              path: 'detailRandom',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Chi tiết"
                        task={['Thiết bị', 'Danh sách cấp số', '']}
                        contentMain="Quản lý Cấp số"
                      />
                      <TeamplateFormDetail
                        classNameIcon={'bx bx-chevron-left-circle'}
                        tittlePath="Quay lại"
                        path={`/randomNumber`}
                        data={[
                          { display: 'Họ tên', key: 'nameCustomer' },
                          { display: 'Nguồn cấp', key: 'origin' },
                          { display: 'Tên dịch vụ', key: 'nameService' },
                          { display: 'Trạng thái', key: 'status' },
                          { display: 'Số thứ tự', key: 'id' },
                          { display: 'Số điện thoại', key: 'phone' },
                          { display: 'Thời gian cấp', key: 'fromDate' },
                          { display: 'Địa chỉ Email', key: 'email' },
                          { display: 'Hạn sử dụng', key: 'toDate' },
                        ]}
                        dataOrigin={Random.dataRandom}
                      />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
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
              path: 'detail',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Chi tiết thiết bị"
                        task={['Thiết bị', 'Danh sách thiết bị', '']}
                        contentMain="Quản lý thiết bị"
                      />
                      <TeamplateFormDetail
                        device
                        classNameIcon="bx bxs-pencil"
                        tittlePath="Cập nhật thiết bị"
                        path="/equipment/update"
                        data={[
                          { display: 'Mã thiết bị', key: 'id' },
                          { display: 'Loại thiết bị', key: 'typeDevice' },
                          { display: 'Tên thiết bị', key: 'name' },
                          { display: 'Tên đăng nhập', key: 'Account' },
                          { display: 'Địa chỉ IP', key: 'ipAddress' },
                          { display: 'Mật khẩu', key: 'passWord' },
                          { display: 'Dịch vụ sử dụng', key: 'service' },
                        ]}
                        dataOrigin={equipment.dataEquip}
                      />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: '',
              element: (
                <Teamplate>
                  <HeaderInfo
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
            // {
            //   path: 'role',

            //   children: [
            //     { path: 'add', element: <FormRole /> },
            //     {
            //       path: 'update',
            //       children: [
            //         {
            //           path: ':id',
            //           element: (
            //             <FormRole
            //               // pathCancel="/service"
            //               // pathSubmit="/service"
            //               update
            //             />
            //           ),
            //         },
            //       ],
            //     },
            //     { path: '', element: <Role /> },
            //   ],
            // },
            {
              path: 'account',
              children: [
                {
                  path: 'add',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Quản lí tài khoản"
                        task={['Cài đặt hệ thống ', 'Quản lý tài khoản', '']}
                        contentMain="Quản lí tài khoản"
                      />
                      <AddAccount />
                    </Teamplate>
                  ),
                },
                {
                  path: '',
                  element: (
                    <Teamplate>
                      <HeaderInfo
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
            // { path: '', element: <Role /> },
            // {
            //   path: 'user',

            //   children: [
            //     { path: 'add', element: <FormRole /> },
            //     {
            //       path: 'update',
            //       children: [
            //         {
            //           path: ':id',
            //           element: (
            //             <FormRole
            //               // pathCancel="/service"
            //               // pathSubmit="/service"
            //               update
            //             />
            //           ),
            //         },
            //       ],
            //     },
            //     { path: '', element: <UserManager /> },
            //   ],
            // },
          ],
        },
        // //service
        {
          path: '/service',
          children: [
            {
              path: 'add',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Thêm dịch vụ"
                    task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <TeamplateFormService
                    pathCancel="/service"
                    pathSubmit="/service"
                  />
                </Teamplate>
              ),
            },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Cập nhật"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TeamplateFormService
                        pathCancel="/service"
                        pathSubmit="/service"
                        update
                      />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: 'detail',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Chi tiết"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TeamplateFormDetailService />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: '',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Danh sách dịch vụ"
                    task={['Dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <ServiceManager />
                </Teamplate>
              ),
            },
          ],
        }, // //randomNumber
        {
          path: '/randomNumber',
          children: [
            {
              path: 'add',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Cấp số mới"
                    task={['Cấp số', 'Danh sách cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <AddRandom />
                </Teamplate>
              ),
            },
            {
              path: '',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Danh sách cấp số"
                    task={['Cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <RandomManager />
                </Teamplate>
              ),
            },
          ],
        },
        {
          path: '*',
          element: '404 not found',
        },
      ],
    },

    // ///announce
    // {
    //   path: '/announce',
    //   element: <ReportManager />,
    // },
    // //manager
  ]);
  return routes;
};

export default Router;