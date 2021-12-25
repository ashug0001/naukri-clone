import { FormWrapper } from "../../components";

const PostJob = () => {
  return (
    <FormWrapper>
      <h2 className="text-primary font-medium text-2xl mb-5">Post a Job</h2>
      <div className="mb-5">
        <label class="block text-gray-700 text-sm mb-2" for="job-title">
          Job title
        </label>
        <input
          class="appearance-none bg-gray-750/20 border border-gray-850 rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="job-title"
          type="text"
          placeholder="Enter job title"
        />
      </div>
      <div className="mb-5">
        <label class="block text-gray-700 text-sm mb-2" for="description">
          Description
        </label>
        <textarea
          class="appearance-none bg-gray-750/20 border border-gray-850 rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Enter job description"
          rows="5"
        />
      </div>
      <div className="mb-10">
        <label class="block text-gray-700 text-sm mb-2" for="location">
          Location
        </label>
        <input
          class="appearance-none bg-gray-750/20 border border-gray-850 rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Enter location"
        />
      </div>
      <div className="flex justify-center mb-14">
        <button
          class="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Post
        </button>
      </div>
    </FormWrapper>
  );
};

export default PostJob;
