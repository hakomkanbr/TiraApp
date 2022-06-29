

// import { getDefaultPath } from '@app/lib/helpers/url_sync';
// import { isServer } from '@app/lib/helpers/isServer';

import actions, { getView } from './actions';

const isServer = false;
const preKeys = 1
// const preKeys = getDefaultPath();
const initState = {
  collapsed: false,
  view: true,
  height: true,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys,
  reloadDatatable: 0,

  kategoriId : 0,
  sosyallar : [],
  kategoriler : [],
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.COLLPSE_CHANGE:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case actions.ADS:
      return {
        ...state,
        ads: action.data,
      };
    case actions.COLLPSE_OPEN_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height,
        };
      }
      break;
    case actions.CHANGE_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.openKeys,
      };
    case actions.CONTACT_FORM:
      return { ...state };
    case actions.GET_PRODUCTS:
      return {
        ...state,
      };
    case actions.GET_PRODUCTS_SUCCSES:
      let products = action.payload;
      return {
        ...state,
        products: products
      };
    case actions.KATEGORILER:
        return {
          ...state,
          kategoriler: action.data
        };
    case actions.SOSYAL:
        return {
          ...state,
          sosyallar: action.data
        };
    case actions.GET_PRODUCTS_ERROR:
      return {
        ...state,
      };
    case actions.RELOAD_TABLE:
      return {
        ...state,
        reloadDatatable: state.reloadDatatable + 1
      };
    case actions.CHANGE_CURRENT:
      return {
        ...state,
        current: action.current,
      };
    case actions.CLEAR_MENU:
      return {
        ...state,
        openKeys: [],
        current: [],
      };
    case actions.KATEGORI_ID:
      return {
        ...state,
        kategoriId : action.id
      };
    default:
      return state;
  }
  return state;
}