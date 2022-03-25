import axios from "axios";
import { requestData } from "./thunk-helper";
import { SET_DRIVER_INFORMATION } from "./action-types";

export function getDriverInformation(driver) {
  return requestData(
    `/api/driver/driver-information?driverId=${driver}`,
    setDriverInformation
  );
}

const setDriverInformation = (response) => ({
  type: SET_DRIVER_INFORMATION,
  payload: response,
});
