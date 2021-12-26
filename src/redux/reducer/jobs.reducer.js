import { jobsTypes } from "../types";

const jobs = (
  state = {
    jobs: [],
    metadata: {
      count: 0,
      limit: 20,
    },
    candidates: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case jobsTypes.ALL_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload.data,
        metadata: action.payload.metadata,
      };

    case jobsTypes.JOB_CANDIDATES_SUCCESS:
      return {
        ...state,
        candidates: action.payload,
      };

    case jobsTypes.CLEAR_CANDIDATES:
      return {
        ...state,
        candidates: [],
      };

    case jobsTypes.CREATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: [action.payload, ...state.jobs],
      };

    case jobsTypes.CREATE_JOB_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default jobs;
