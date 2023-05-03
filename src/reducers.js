import { combineReducers } from "redux";
import storage from "localforage";
import projectReducer from "./pages/project/reducer";
// import PlanReducer from "./modules/Plans/reducer";
// import OrganizationReducer from "./modules/Organization/reducer";
// import SubscriptionReducer from "./modules/Subscription/reducer";
// import VoucherReducer from "./modules/Voucher/reducer";
// import LoginReducer from "./modules/Login/reducer";
// import SnackbarReducer from "./modules/global/Snackbar/reducer";

const appReducer = combineReducers({
  projectReducer: projectReducer,
  //   planReducer: PlanReducer,
  //   organizationReducer: OrganizationReducer,
  //   loginReducer: LoginReducer,
  //   snackbarReducer: SnackbarReducer,
  //   voucherReducer: VoucherReducer,
  //   subscriptionReducer: SubscriptionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LoginReducer/setIsLogoutClicked") {
    state = {};
    storage.removeItem("persist:loginReducer");
    //     // storage.removeItem('persist:userDetailsReducer');
    //     // storage.removeItem('persist:subscriptionReducer');
    //     // storage.removeItem('persist:integrationsReducer');
  }

  return appReducer(state, action);
};

export default rootReducer;
