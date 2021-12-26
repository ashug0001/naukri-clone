const ApplicationCard = ({ application = {} }) => {
  return (
    <div className="bg-white rounded p-3.5 w-full max-w-[302px] border border-primary/50">
      <div className="flex items-center gap-5 mb-6">
        <div className="flex justify-center items-center w-11 h-11 rounded-full bg-cyan-950">
          {application.name[0]?.toUpperCase()}
        </div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-primary text-sm font-medium mb-2.5 capitalize">
            {application.name}
          </p>
          <span className="text-primary/80 text-sm">{application.email}</span>
        </div>
      </div>
      <div className="skills">
        <p className="text-primary text-xs font-medium">Skills</p>
        <p className="text-primary/80 text-sm line-clamp-2 h-10">
          {application.skills}
        </p>
      </div>
    </div>
  );
};

export default ApplicationCard;
