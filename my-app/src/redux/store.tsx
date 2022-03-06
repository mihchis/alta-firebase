import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../components/paginationSlice';
import equipSlice from '../pages/equi/equipSlice';
import AccountSlice from '../pages/manager/account/accountSlice';
import randomSlice from '../pages/capso/capsoSlice';
import ServiceSlice from '../pages/service/ServiceSlice';
import userSlice from '../pages/user/userSlice';
import managerRoleSlice from '../pages/manager/role/roleSlice';
import managerUserSlice from '../pages/manager/user/userSlice';
import reportSlice from '../pages/report/reportSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipSlice.reducer,
    pagination: paginationSlice.reducer,
    account: AccountSlice.reducer,
    service: ServiceSlice.reducer,
    random: randomSlice.reducer,
    report: reportSlice.reducer,
    managerUser: managerUserSlice.reducer,
    managerRole: managerRoleSlice.reducer,
  },
});
export default store;