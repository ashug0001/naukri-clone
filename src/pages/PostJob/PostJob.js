import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormWrapper, TextField } from "../../components";
import { jobsActions } from "../../redux/actions";

const JobSchema = Yup.object().shape({
  title: Yup.string().required("The field is mandatory."),
  description: Yup.string().required("The field is mandatory."),
  location: Yup.string().required("The field is mandatory."),
});

const PostJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.jobs);
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        location: "",
      },
      validationSchema: JobSchema,
      onSubmit: async (values) => {
        try {
          await dispatch(jobsActions.createJob(values));
          navigate("/posts");
        } finally {
        }
      },
    });

  return (
    <FormWrapper handleSubmit={handleSubmit}>
      <h2 className="text-primary font-medium text-2xl mb-5">Post a Job</h2>
      <div className="mb-5">
        <TextField
          id="title"
          type="text"
          placeholder="Enter job title"
          label="Job title"
          required
          name="title"
          value={values.title}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={
            (touched.title && Boolean(errors.title)) || Boolean(error?.message)
          }
          helperText={touched.title && errors.title}
        />
      </div>
      <div className="mb-5">
        <TextField
          id="description"
          type="text"
          placeholder="Enter job description"
          rows="5"
          label="Description"
          required
          name="description"
          value={values.description}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={
            (touched.description && Boolean(errors.description)) ||
            Boolean(error?.message)
          }
          helperText={touched.description && errors.description}
        />
      </div>
      <div className="mb-10">
        <TextField
          id="location"
          type="text"
          placeholder="Enter location"
          label="Location"
          required
          name="location"
          value={values.location}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={
            (touched.location && Boolean(errors.location)) ||
            Boolean(error?.message)
          }
          helperText={touched.location && errors.location}
        />
      </div>
      {error?.message && (
        <p className="text-red-500 text-xs italic mb-5 -mt-9">
          {error.message}
        </p>
      )}
      <div className="flex justify-center mb-14">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Post
        </button>
      </div>
    </FormWrapper>
  );
};

export default PostJob;
