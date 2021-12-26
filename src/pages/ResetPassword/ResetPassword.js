import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormWrapper, TextField } from "../../components";
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
        <TextField
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          label="New password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            (formik.touched.password && Boolean(formik.errors.password)) ||
            Boolean(error?.message)
          }
        />
      </div>
      <div className="mb-10">
        <TextField
          id="confirm-password"
          type="password"
          placeholder="Enter your password"
          name="confirmPassword"
          required
          label="Confirm new password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            (formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)) ||
            Boolean(error?.message)
          }
          helperText={
            (formik.touched.confirmPassword && formik.errors.confirmPassword) ||
            error?.message
          }
        />
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
