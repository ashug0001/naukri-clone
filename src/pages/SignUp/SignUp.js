import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

import { FormWrapper, RadioInput, TextField } from "../../components";
import { authActions } from "../../redux/actions";

const SignupSchema = Yup.object().shape({
  userRole: Yup.bool().required(),
  name: Yup.string().required("The field is mandatory."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("The field is mandatory."),
  password: Yup.string().required("The field is mandatory."),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Confirm Password should match Password",
    function (value) {
      return this.parent.password === value;
    }
  ),
  skills: Yup.string(),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        userRole: 0,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        skills: "",
      },
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        try {
          await dispatch(authActions.signUp(values));
          navigate("/posts");
        } finally {
        }
      },
    });

  return (
    <FormWrapper handleSubmit={handleSubmit}>
      <h2 className="text-primary font-medium text-2xl mb-7">Signup</h2>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm mb-2 font-sans ">I’m a</p>
        <div className="flex gap-5">
          <RadioInput
            label="Recruiter"
            id="recruiter"
            Icon={UserIcon}
            name="userRole"
            checked={+values.userRole === 0}
            onChange={handleChange}
            value="0"
          />
          <RadioInput
            label="Candidate"
            id="candidate"
            Icon={UserGroupIcon}
            name="userRole"
            checked={+values.userRole === 1}
            onChange={handleChange}
            value="1"
          />
        </div>
      </div>
      <div className="mb-4">
        <TextField
          id="name"
          type="text"
          label="Full name"
          placeholder="Enter your full name"
          required
          name="name"
          value={values.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={
            (touched.name && Boolean(errors.name)) || Boolean(error?.message)
          }
          helperText={touched.name && errors.name}
        />
      </div>
      <div className="mb-6">
        <TextField
          label="Email address"
          id="email"
          type="email"
          placeholder="mail@email.com"
          required
          name="email"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={
            (touched.email && Boolean(errors.email)) || Boolean(error?.message)
          }
          helperText={touched.email && errors.email}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <TextField
            label="Create Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={
              (touched.password && Boolean(errors.password)) ||
              Boolean(error?.message)
            }
            helperText={touched.password && errors.password}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextField
            label="Confirm Password"
            id="confirm-password"
            placeholder="Enter your password"
            type="confirmPassword"
            required
            name="confirmPassword"
            value={values.confirmPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={
              (touched.confirmPassword && Boolean(errors.confirmPassword)) ||
              Boolean(error?.message)
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
        </div>
      </div>
      <div className="mb-6">
        <TextField
          label="Skills"
          id="skills"
          placeholder="Enter comma separated skills"
          type="text"
          required
          name="skills"
          value={values.skills}
          handleChange={handleChange}
        />
      </div>
      {error?.message && (
        <p className="text-red-500 text-xs italic mb-5">{error.message}</p>
      )}
      <div className="flex justify-center mb-11">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Signup
        </button>
      </div>
      <p className="text-center">
        Have an account?{" "}
        <Link
          to="/login"
          className="inline-block align-baseline font-medium text-blue"
        >
          Login
        </Link>
      </p>
    </FormWrapper>
  );
};

export default SignUp;
