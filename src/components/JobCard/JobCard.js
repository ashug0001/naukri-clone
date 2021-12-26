import { useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import ApplicationModal from "../ApplicationModal";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 bg-white rounded shadow-[0px_3px_6px_#557DA526] max-w-[260px] min-w-[260px] min-h-[172px] max-h-[172px]">
      <h6 className="text-primary text-lg mb-2.5">{job.title}</h6>
      <p className="text-primary text-sm opacity-80 line-clamp-3 h-[60px]">
        {job.description}
      </p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <LocationMarkerIcon className="text-blue w-2.5 h-4 mr-2.5" />
          <span className="text-primary text-sm opacity-80 capitalize">
            {job.location}
          </span>
        </div>
        <button
          className="px-4 py-2.5 bg-blue/20 text-xs text-primary rounded mt-1.5"
          onClick={() => setOpen(true)}
        >
          View Application
        </button>
      </div>
      <ApplicationModal open={open} handleClose={setOpen} job={job} />
    </div>
  );
};

export default JobCard;
