const colors = {
  bluePopular: '#0b98ef',
  whitePopular: '#fdfdfd',
  textPopular: '#888',
};

const menus = [
  {
    label: 'Nhập kho',
    icon: 'home-import-outline',
    navigation: 'ImportBy',
  },
  {
    label: 'Xuất kho',
    icon: 'home-export-outline',
    navigation: '',
  },
  {
    label: 'Chuyển kho',
    icon: 'cached',
    navigation: '',
  },
  {
    label: 'Kiểm kê',
    icon: 'file-document-multiple-outline',
    navigation: '',
  },
  {
    label: 'Tra cứu lịch sử',
    icon: 'history',
    navigation: '',
  },
];

const storageKeys = {
  expiresAt: 'expiresAt',
  token: 'token',
  refreshToken: 'refreshToken',
};
export default {
  colors,
  menus,
  storageKeys,
};
