import { EyeCloseIcon } from "../common/icons/Icons";
import { EyeOpenIcon } from "../common/icons/Icons";
import emailRight from "../../assets/svg/emailRight.svg";
import login from "../../assets/svg/login.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginLoader } from "../../controllers/services/loaderMethods/Login/LoginLoader";
import { loginSelector } from "../../controllers/services/selectorMethods/Login/LoginSelector";

export const Login = () => {
  const [emailvalid, setEmailvalid] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState(false)

  const dispatch = useDispatch();
  const navigation = useNavigate();

  // login slice data
  const { loginError } = useSelector(loginSelector)

  useEffect(() => {
    const auth = localStorage.getItem("auth")
    if (auth) {
      sessionStorage.setItem("openId", 0);
      navigation("/dashboard");
    }
  }, [])

  //   regex
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in|net|yahoo)$/i; // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(example|gmail|yahoo|rediff)\.(?:com|in|net|yahoo)$/i; // Email validation regex

  // handle input values
  const handleInputValues = (e) => {
    const { value, name } = e.target;

    if (name === "email") {
      setFields((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (emailRegex.test(value)) {
        setError((prev) => ({
          ...prev,
          [name]: "",
        }));
        setEmailvalid(true);
        setValid(true)
      } else {
        setError((prev) => ({
          ...prev,
          [name]: "red",
        }));
        setEmailvalid(false);
        setValid(false)
      }
    }

    if (name === "password") {
      setFields((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
      if (!value) {
        setError((pre) => {
          return { ...pre, [name]: "red" };
        });
        setValid(false)
      } else {
        setError((pre) => {
          return { ...pre, [name]: "" };
        });
        setValid(true)
      }
    }

  };


  // submit form
  const SubmitForm = (e) => {
    e.preventDefault();
    if (valid) {
      dispatch(LoginLoader(fields, navigation))
    }
  };



  return (
    <section className="flex h-screen">
      <div className="w-[40%] h-full">
        <img src={login} className="w-full h-full object-center object-cover" />
      </div>
      <form className="w-[60%] h-full flex justify-center items-center" onSubmit={SubmitForm}>
        <div className="flex flex-col w-[22rem]">
          <h2 className="text-general font-text text-[#757575]">
            Welcome back! 👋
          </h2>
          <h1 className="text-max text-bgTopBtn font-bolder mb-6">
            Login to your account
          </h1>

          <div className="flex flex-col mb-5">
            <label className="text-general font-bold mb-1">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={fields.email}
                className="border border-loginInputBorder w-full border-opacity-25 rounded-sm bg-loginInputBg h-10 p-2 font-text text-heading outline-none text-loginInputBorder"
                onChange={handleInputValues}
                style={{
                  borderColor: `${error.email === "red" ? "red" : "#A0A6C0"}`,
                }}
              />
              {emailvalid && (
                <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                  <img src={emailRight} />
                </div>
              )}
            </div>
            {loginError ? <p className="text-red-500">{loginError}</p> : ""}
          </div>
          <div className="flex flex-col relative">
            <label className="text-general font-bold mb-1">Password</label>
            <input
              type={showPassword}
              name="password"
              value={fields.password}
              className="border border-loginInputBorder border-opacity-25 rounded-sm bg-loginInputBg h-10 p-2 font-text text-heading outline-none text-loginInputBorder"
              onChange={handleInputValues}
              style={{
                borderColor: `${error.password === "red" ? "red" : "#A0A6C0"}`,
              }}
            />
            {showPassword === "text" ? (
              <span
                className="absolute right-2 bottom-1"
                onClick={() => setShowPassword("password")}
              >
                <EyeCloseIcon />
              </span>
            ) : (
              <span
                className="absolute right-2 bottom-1"
                onClick={() => setShowPassword("text")}
              >
                <EyeOpenIcon />
              </span>
            )}
          </div>
          {/* buttons */}
          <button
            className="w-full h-[2.5rem] border border-buttonBorder rounded-md bg-buttonBg text-white mt-5"
            type="submit"
          >
            Login
          </button>
          <button className="text-forgotPassword mt-5 text-general font-text hover:underline text-start">
            Forgot Password?
          </button>
        </div>
      </form>
    </section>
  );
};
