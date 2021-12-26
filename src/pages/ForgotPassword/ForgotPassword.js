import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormWrapper } from "../../components";
import { authActions } from "../../redux/actions";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Schema,
    onSubmit: async ({ email }) => {
      try {
        await dispatch(authActions.forgotPassword({ email }));
        navigate("/reset-password");
      } finally {
      }
    },
  });

  return (
    <FormWrapper handleSubmit={formik.handleSubmit}>
      <h2 className="text-primary font-medium text-2xl mb-5">
        Forgot your password?
      </h2>
      <p className="mb-5 text-sm text-primary">
        Enter the email associated with your account and we’ll send you
        instructions to reset your password.
      </p>
      <div className="mb-10">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
          Email address
        </label>
        <input
          className={`appearance-none bg-gray-750/20 border  rounded 
                w-full p-4  leading-tight focus:shadow-outline
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
      <div className="flex justify-center">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </FormWrapper>
  );
};

export default ForgotPassword;
