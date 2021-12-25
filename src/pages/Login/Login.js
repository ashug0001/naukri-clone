import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormWrapper } from "../../components";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
  password: Yup.string().required("Password is Required."),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submit");
    },
  });

  return (
    <FormWrapper handleSubmit={formik.handleSubmit}>
      <h2 className="text-primary font-medium text-2xl mb-6">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
          Email address
        </label>
        <input
          className={`appearance-none bg-gray-750/20 border  rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:shadow-outline 
                ${
                  formik.touched.email && Boolean(formik.errors.email)
                    ? " focus:outline-red-500 border-red-500"
                    : " border-gray-850 focus:outline-blue"
                }
                `}
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <label className=" text-gray-700 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <Link
            className="inline-block align-baseline font-medium 
                    text-sm text-blue hover:text-blue-800"
            to="/forgot-password"
          >
            Forgot your password?
          </Link>
        </div>
        <input
          className={`appearance-none bg-gray-750/20 border rounded 
                w-full p-4 text-gray-700 leading-tight 
                ${
                  formik.touched.password && Boolean(formik.errors.password)
                    ? " focus:outline-red-500 border-red-500"
                    : " border-gray-850 focus:outline-blue"
                }
                focus:shadow-outline`}
          id="password"
          type="password"
          name="password"
          placeholder="******************"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="flex justify-center mb-14">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        New to MyJobs?{" "}
        <Link
          to="/signup"
          className="inline-block align-baseline font-medium text-blue"
        >
          Create an account
        </Link>
      </p>
    </FormWrapper>
  );
};

export default Login;
