import { ClipboardListIcon } from "@heroicons/react/solid";
import { Breadcrumb, JobCard } from "../../components";

const Posts = ({ posts = [] }) => {
  return (
    <div className="w-3/4 mx-auto">
      <Breadcrumb />
      <h1 className="text-white font-medium text-xl mt-6 mb-5">
        Jobs posted by you
      </h1>
      {posts.length > 0 ? (
        <div className="job-cards flex flex-wrap">
          <JobCard />
        </div>
      ) : (
        <div className="mt-56 text-center">
          <ClipboardListIcon className="mx-auto w-28 h-28 text-[#A9AFBC]" />
          <p className="text-xl text-primary/80 mt-5 mb-10">
            Your posted jobs will show here!
          </p>
          <a class="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline">
            Post a Job
          </a>
        </div>
      )}
    </div>
  );
};

export default Posts;
