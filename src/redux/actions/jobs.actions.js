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
        type: jobsTypes.JOB_CANDIDATES_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      const payload = error?.response?.data;
      dispatch({ type: jobsTypes.JOB_CANDIDATES_FAILURE, payload });
      throw new Error();
    }
  };

const clearCandidates = () => (dispatch) => {
  dispatch({
    type: jobsTypes.CLEAR_CANDIDATES,
  });
};

export default {
  allJobs,
  jobCandidates,
  clearCandidates,
};
