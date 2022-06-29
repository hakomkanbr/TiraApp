export function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}
const actions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  RELOAD_TABLE : "RELOAD_TABLE",
  CLEAR_MENU: 'CLEAR_MENU',
  KATEGORI_ID : "KATEGORI_ID",
  SOSYAL : "SOSYAL",
  ADS : "ADS",
  KATEGORILER : "KATEGORILER",
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE,
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height,
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER,
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys,
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current,
  }),
  clearMenu: () => ({ type: actions.CLEAR_MENU })
};
export const reloadDatatable = data => {
  return {
      type: actions.RELOAD_TABLE,
      data
  };
};

export const setKategoriId = id => {
  return {
      type: actions.KATEGORI_ID,
      id
  };
};

export const setSosyalAction = data => {
  return {
      type: actions.SOSYAL,
      data
  };
};

export const setKategoriler = data => {
  return {
      type: actions.KATEGORILER,
      data
  };
};

export const setAds = data => {
  return {
      type: actions.ADS,
      data
  };
};


export default actions;