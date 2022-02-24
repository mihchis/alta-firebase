import baocao from '../icons/baocao.png';
import capso from '../icons/capso.png';
import dashboard from '../icons/dashboard.png';
import dichvu from '../icons/dichvu.png';
import thietbi from '../icons/thietbi.png';
import setting from '../icons/setting.png';

export const navLists = [
    { display: 'Dashboard', icon: dashboard, path: 'dashboard' },
    { display: 'Thiết bị', icon: thietbi, path: 'equipment' },
    { display: 'Dịch vụ', icon: dichvu, path: 'service' },
    { display: 'Cấp số', icon: capso, path: 'randomNumber' },
    { display: 'Báo cáo', icon: baocao, path: 'announce' },
    {
      display: 'Cài đặt hệ thống',
      icon: setting,
      path: 'manage/account',
      childrens: [
        { display: 'Quản lý vai trò', path: 'manage/role' },
        { display: 'Quản lý tài khoản', path: 'manage/account' },
        { display: 'Nhật ký người dùng', path: 'manage/user' },
      ],
    },
];