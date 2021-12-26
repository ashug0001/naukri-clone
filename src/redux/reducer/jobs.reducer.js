import { jobsTypes } from "../types";

const jobs = (
  state = {
    jobs: [],
    metadata: {
      count: 0,
      limit: 20,
    },
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

    default:
      return state;
  }
};

export default jobs;
