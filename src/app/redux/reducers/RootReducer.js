import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import NavigationReducer from "./NavigationReducer";
import GraphReducer from "./GraphReducer";
import ChainReducer from "./ChainReducer";
import NetworkReducer from "./NetworkReducer";
import SnackBarReducer from "./SnackBarReducer";
import DomainReducer from "./DomainReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  navigations: NavigationReducer,
  graph: GraphReducer,
  chain: ChainReducer,
  network: NetworkReducer,
  snackbar: SnackBarReducer,
  domain: DomainReducer
});

export default RootReducer;
