import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormWrapper } from "../../components";
import { authActions } from "../../redux/actions";

const Schema = Yup.object().shape({
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Confirm Password should match Password",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reset, error } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Schema,
    onSubmit: async ({ password, confirmPassword }) => {
      if (!reset?.token) {
        alert("Please goto Forgot Password Page and follow the process.");
        return;
      }
      try {
        await dispatch(
          authActions.resetPassword({
            password,
            confirmPassword,
            token: reset.token,
          })
        );
        navigate("/posts");
      } finally {
      }
    },
  });

  return (
    <FormWrapper handleSubmit={formik.handleSubmit}>
      <h2 className="text-primary font-medium text-2xl mb-5">
        Reset Your Password
      </h2>
      <p className="mb-5 text-sm text-primary">
        Enter your new password below.
      </p>
      <div className="mb-5">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
          New password
        </label>
        <input
          className={`appearance-none bg-gray-750/20 border  rounded 
                w-full p-4 text-gray-700 leading-tight 
                 focus:shadow-outline
                 ${
                   (formik.touched.password &&
                     Boolean(formik.errors.password)) ||
                   error?.message
                     ? " focus:outline-red-500 border-red-500"
                     : " border-gray-850 focus:outline-blue"
                 }
                 `}
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mb-10">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="confirm-password"
        >
          Confirm new password
        </label>
        <input
          className={`appearance-none bg-gray-750/20 border  rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:shadow-outline
                ${
                  (formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)) ||
                  error?.message
                    ? " focus:outline-red-500 border-red-500"
                    : " border-gray-850 focus:outline-blue"
                }
                `}
          id="confirm-password"
          type="password"
          placeholder="Enter your password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p className="text-red-500 text-xs italic text-right">
          {(formik.touched.confirmPassword && formik.errors.confirmPassword) ||
            error?.message}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Reset
        </button>
      </div>
    </FormWrapper>
  );
};

export default ResetPassword;
