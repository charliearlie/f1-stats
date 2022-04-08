import axios from "axios";
import { requestData } from "./thunk-helper";
import { SET_DRIVERS, SET_DRIVER_INFORMATION } from "./action-types";

export function getDriverInformation(driver) {
  return requestData(
    `/api/driver/driver-information?driverId=${driver}`,
    setDriverInformation
  );
}

export function getAllDrivers() {
  return requestData(
    `/api/driver/all-drivers`,
    setDrivers
  );
}

const setDriverInformation = (response) => ({
  type: SET_DRIVER_INFORMATION,
  payload: response,
});

const setDrivers = (response) => ({
  type: SET_DRIVERS,
  payload: response,
})
