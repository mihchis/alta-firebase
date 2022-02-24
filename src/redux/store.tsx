import { configureStore } from '@reduxjs/toolkit';
import paginationslice from '../components/paginationslice';
import equipslice from '../pages/equi/equipslice';
import accslice from '../pages/manager/acc/accslice';
import userslice from '../pages/login/userslice';
const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      equipment: equipSlice.reducer,
      pagination: paginationSlice.reducer,
      account: AccountSlice.reducer,
    },
  });
  export default store;