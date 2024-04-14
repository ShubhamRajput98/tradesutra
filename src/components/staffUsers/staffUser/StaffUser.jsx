import React, { useState } from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import { EyeCloseIcon, EyeOpenIcon } from "../../common/icons/Icons";

export const StaffUser = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [fields, setFields] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    user_manager: [],
  });
  const [error, setError] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [otherCheckBoxChecked, setOtherCheckBoxChecked] = useState(false);

  // regex
  const nameRegex = /^[A-Za-z\s]+$/; // Only allows letters and spaces
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email validation regex
  const phoneNumberRegex = /^\d{10}$/; // 10-digit phone number

  // handle all select checkbox
  const handleOtherCheckBox = (e) => {
    const { checked } = e.target;
    setOtherCheckBoxChecked(checked);

    if (checked) {
      const allCheckboxValues = [
        "marketNew",
        "analytics",
        "marketManagement",
        "applicationUser",
        "applicationSetting",
        "adminMessage",
        "feedback",
        "manageTips",
        "marketCommentary",
        "tradersClinic",
        "membershipPlan",
      ];
      setFields({ ...fields, user_manager: allCheckboxValues });
    } else {
      setFields({ ...fields, user_manager: [] });
    }
  };

  // handle single checkboxes
  const handleCheckBox = (e) => {
    const { value, checked } = e.target;

    if (otherCheckBoxChecked) {
      setFields((prev) => {
        if (checked && !prev.includes(value)) {
          return [...fields.user_manager, value];
        } else if (!checked) {
          return {
            ...prev,
            user_manager: prev.user_manager.filter((item) => item !== value),
          };
        } else {
          return prev;
        }
      });
    } else {
      if (checked) {
        const updatedUserManager = [...fields?.user_manager, value];
        setFields({ ...fields, user_manager: updatedUserManager });
      } else {
        setFields((pre) => {
          return {
            ...pre,
            user_manager: fields.user_manager.filter((item) => item !== value),
          };
        });
      }
    }
  };

  // handle input values
  const handleInputValues = (e) => {
    const { value, name } = e.target;

    if (name === "user_name") {
      setFields((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
      if (nameRegex.test(value)) {
        setError((pre) => {
          return { ...pre, [name]: "" };
        });
      } else {
        setError((pre) => {
          return { ...pre, [name]: "red" };
        });
      }
    }

    if (name === "email") {
      setFields((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
      if (emailRegex.test(value)) {
        setError((pre) => {
          return { ...pre, [name]: "" };
        });
      } else {
        setError((pre) => {
          return { ...pre, [name]: "red" };
        });
      }
    }

    if (name === "phone_number") {
      setFields((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
      if (phoneNumberRegex.test(value)) {
        setError((pre) => {
          return { ...pre, [name]: "" };
        });
      } else {
        setError((pre) => {
          return { ...pre, [name]: "red" };
        });
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
      } else {
        setError((pre) => {
          return { ...pre, [name]: "" };
        });
      }
    }
  };

  // validate form
  const validationForm = () => {
    const { user_name, email, phone_number, password } = fields;

    if (!user_name) {
      setError((pre) => {
        return { ...pre, user_name: "red" };
      });
    }

    if (!email) {
      setError((pre) => {
        return { ...pre, email: "red" };
      });
    }

    if (!phone_number) {
      setError((pre) => {
        return { ...pre, phone_number: "red" };
      });
    }

    if (!password) {
      setError((pre) => {
        return { ...pre, password: "red" };
      });
    }
  };

  // submit form
  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
  };

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      {/* <ModuleHeader module={"Staff Users"} subModule={"Staff User"} /> */}
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-4 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="flex flex-wrap gap-4">
            {/* user name */}

            <div
              className={`w-[36%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1`}
              style={{
                borderColor: `${error.user_name === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                User Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                value={fields.user_name}
                placeholder="Select"
                className="pl-2 outline-none w-full"
                onChange={handleInputValues}
              />
            </div>

            {/* email */}

            <div
              className="w-[36%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${error.email === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                placeholder="Select"
                className="pl-2 outline-none w-full"
                onChange={handleInputValues}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* number */}
            <div
              className="w-[36%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${
                  error.phone_number === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Phone No.<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="phone_number"
                value={fields.phone_number}
                placeholder="Select"
                className="pl-2 outline-none w-full"
                onChange={handleInputValues}
              />
            </div>

            {/* password */}
            <div
              className="w-[36%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${error.password === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword}
                  name="password"
                  placeholder="Enter Password"
                  className="pl-2 outline-none pr-10 w-full"
                  value={fields.password}
                  onChange={handleInputValues}
                />
                {showPassword === "text" ? (
                  <span
                    className="absolute right-2"
                    onClick={() => setShowPassword("password")}
                  >
                    <EyeCloseIcon />
                  </span>
                ) : (
                  <span
                    className="absolute right-2"
                    onClick={() => setShowPassword("text")}
                  >
                    <EyeOpenIcon />
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center gap-2 ">
              <label className="text-major font-bold" htmlFor="userManager">
                User Manager
              </label>
              <input
                type="checkbox"
                id="userManager"
                name="userManager"
                value="userManager"
                className="h-4 w-4 accent-bgDarkBlue"
                checked={otherCheckBoxChecked}
                onChange={handleOtherCheckBox}
              />
            </div>
          </div>

          <div className="w-[73%] border border-[#A0A6C0] rounded-md flex gap-2 p-5">
            <div className="flex flex-col gap-5 mr-20">
              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="marketNew"
                    name="marketNew"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("marketNew")}
                    value={"marketNew"}
                    onChange={handleCheckBox}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="marketNew"
                  >
                    Market New
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="analytics"
                    name="analytics"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("analytics")}
                    value={"analytics"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="analytics"
                  >
                    Analytics
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="marketManagement"
                    name="marketManagement"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("marketManagement")}
                    value={"marketManagement"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="marketManagement"
                  >
                    Market Management
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="applicationUser"
                    name="applicationUser"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("applicationUser")}
                    value={"applicationUser"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="applicationUser"
                  >
                    Application User
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="applicationSetting"
                    name="applicationSetting"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes(
                      "applicationSetting"
                    )}
                    value={"applicationSetting"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="applicationSetting"
                  >
                    Application Setting
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="adminMessage"
                    name="adminMessage"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("adminMessage")}
                    value={"adminMessage"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="adminMessage"
                  >
                    Admin Message
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="feedback"
                    name="feedback"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("feedback")}
                    value={"feedback"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="feedback"
                  >
                    Feedback
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="manageTips"
                    name="manageTips"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("manageTips")}
                    value={"manageTips"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="manageTips"
                  >
                    Manage Tips
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="marketCommentary"
                    name="marketCommentary"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("marketCommentary")}
                    value={"marketCommentary"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="marketCommentary"
                  >
                    Market Commentary
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="tradersClinic"
                    name="tradersClinic"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("tradersClinic")}
                    value={"tradersClinic"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="tradersClinic"
                  >
                    Traders Clinic
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    id="membershipPlan"
                    name="membershipPlan"
                    className="h-4 w-4 accent-bgDarkBlue"
                    checked={fields?.user_manager?.includes("membershipPlan")}
                    value={"membershipPlan"}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label
                    className="text-general font-heading text-bgTopBtn"
                    htmlFor="membershipPlan"
                  >
                    Membership Plan
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-10">
            <button
              type="button"
              className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white"
            >
              Add Staff
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
