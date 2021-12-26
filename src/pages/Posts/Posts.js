import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { Breadcrumb, JobCard, Pagination } from "../../components";
import { jobsActions } from "../../redux/actions";

const LIMIT = 20;

const Posts = () => {
  const dispatch = useDispatch();
  const { jobs = [], metadata } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      await dispatch(jobsActions.allJobs(page));
    })();
  }, [dispatch, page]);

  return (
    <div className="w-3/4 mx-auto">
      <Breadcrumb />
      <h1 className="text-white font-medium text-xl mt-6 mb-5">
        Jobs posted by you
      </h1>
      {jobs.length > 0 ? (
        <>
          <div className="job-cards flex flex-wrap gap-5">
            {jobs.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
          <Pagination
            page={page}
            onChange={setPage}
            count={Math.ceil(metadata?.count / LIMIT) || 1}
            siblingCount={1}
          />
        </>
      ) : (
        <div className="mt-56 text-center">
          <ClipboardListIcon className="mx-auto w-28 h-28 text-[#A9AFBC]" />
          <p className="text-xl text-primary/80 mt-5 mb-10">
            Your posted jobs will show here!
          </p>
          <a className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline">
            Post a Job
          </a>
        </div>
      )}
    </div>
  );
};

export default Posts;
