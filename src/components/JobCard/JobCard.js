import { LocationMarkerIcon } from "@heroicons/react/outline";

const JobCard = () => {
  return (
    <div className="p-4 bg-white rounded shadow-[0px_3px_6px_#557DA526] max-w-[260px] min-w-[260px] min-h-[172px] max-h-[172px]">
      <h6 className="text-primary text-lg mb-2.5">UI UX Designer</h6>
      <p className="text-primary text-sm opacity-80 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt…
      </p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <LocationMarkerIcon className="text-blue w-2.5 h-4 mr-2.5" />
          <span className="text-primary text-sm opacity-80">Bengaluru</span>
        </div>
        <button className="px-4 py-2.5 bg-blue/20 text-xs text-primary rounded mt-1.5">
          View Application
        </button>
      </div>
    </div>
  );
};

export default JobCard;
