import { jobsTypes } from "../types";

const jobs = (
  state = {
    jobs: [],
    metadata: {
      count: 0,
      limit: 20,
    },
    candidates: [],
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

    default:
      return state;
  }
};

export default jobs;
