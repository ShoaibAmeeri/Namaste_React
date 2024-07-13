import { useFormik } from "formik";
import { signupSchema } from "../signupSchema/Signup";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, handleBlur, handleSubmit, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,

      onSubmit: (value) => {
        console.log(value);
      },
    });
  console.log(errors);

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modal-container w-[85%] bg-gray-100 mx-auto my-[50px] p-8 flex">
            <div className="w-[49%] bg-white px-8 py-12">
              <h1 className="modal-title font-semibold text-2xl my-2">Welcome!</h1>
              <p className="text-gray-500">
                To the thapa technical website for programmers.
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="border flex  my-5 flex-col p-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                  className="text-xl"
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </div>
                <div  className="border flex  my-5 flex-col p-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div className="border flex  my-5 flex-col p-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>
                <div className="border flex  my-5 flex-col p-2">
                  <label htmlFor="confirm_password" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null}
                </div>
                <div className="modal-buttons flex justify-between items-center ">
                  <a href="#" className="text-sm font-normal text-gray-400">
                    Want to register using Gmail?
                  </a>
                  <button className="px-5 py-3 bg-[#c26363] text-white uppercase rounded-sm text-sm" type="submit">
                    Registration
                  </button>
                </div>
              </form>
              <p className="mt-10 ms-20 text-lg">
                Already have an account? <a href="#">Sign In now</a>
              </p>
            </div>
            <div className="w-[49%]">
              <img
              className="h-[100vh]"
                src="https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
