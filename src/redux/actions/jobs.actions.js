import http from "../../utils/http";
import { jobsTypes } from "../types";

const allJobs =
  (page = "1") =>
  async (dispatch) => {
    try {
      const response = await http.get("recruiters/jobs", {
        params: { page },
      });
      dispatch({
        type: jobsTypes.ALL_JOBS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      const payload = error?.response?.data;
      dispatch({ type: jobsTypes.ALL_JOBS_FAILURE, payload });
      throw new Error();
    }
  };

const jobCandidates =
  (id = null) =>
  async (dispatch) => {
    try {
      const response = await http.get(`recruiters/jobs/${id}/candidates`);
      dispatch({
        type: jobsTypes.JOB_CANDITATES_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      const payload = error?.response?.data;
      dispatch({ type: jobsTypes.JOB_CANDITATES_FAILURE, payload });
      throw new Error();
    }
  };

export default {
  allJobs,
  jobCandidates,
};
