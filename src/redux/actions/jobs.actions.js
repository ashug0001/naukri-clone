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

const createJob = (body) => async (dispatch) => {
  try {
    const response = await http.post("/jobs/", {
      location: body.location,
    });
    dispatch({
      type: jobsTypes.CREATE_JOB_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log({ error });
    const payload = error?.response?.data;
    dispatch({ type: jobsTypes.CREATE_JOB_FAILURE, payload });
    throw new Error();
  }
};

export default {
  allJobs,
  jobCandidates,
  clearCandidates,
  createJob,
};
