import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { useState } from "react";

export const AddMembership = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [fields, setFields] = useState({});
  const [error, setError] = useState({
    plan_category: "",
    plan_title: "",
    plan_amount: "",
    duration: "",
    plan_status: "",
    description: "",
  });

  // store dropdown value in fields
  const handleOptionSelected = (e, name) => {
    setFields({ ...fields, [name]: e.value });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

  // store input and textarea value in fields
  const handleInputValues = (e) => {
    const { value, name, type } = e.target;
    if (type === "number") {
      if (Number(value) < 0) {
        return 0;
      }
    }

    setFields((pre) => {
      if (type === "number" || type === "textarea") {
        return {
          ...pre,
          [name]: value,
        };
      }
    });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

  // validate form
  const validationForm = () => {
    const {
      plan_category,
      plan_title,
      plan_amount,
      duration,
      plan_status,
      description,
    } = fields;

    if (!plan_category) {
      setError((pre) => {
        return { ...pre, plan_category: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, plan_category: "" };
      });
    }

    if (!plan_title) {
      setError((pre) => {
        return { ...pre, plan_title: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, plan_title: "" };
      });
    }

    if (!plan_amount) {
      setError((pre) => {
        return { ...pre, plan_amount: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, plan_amount: "" };
      });
    }

    if (!duration) {
      setError((pre) => {
        return { ...pre, duration: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, duration: "" };
      });
    }

    if (!plan_status) {
      setError((pre) => {
        return { ...pre, plan_status: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, plan_status: "" };
      });
    }

    if (!description) {
      setError((pre) => {
        return { ...pre, description: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, description: "" };
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
      <ModuleHeader module={"Membership"} subModule={"Add Membership"} />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-6 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="flex flex-col gap-2">
            {/* dropdowns */}
            <div className="w-[30rem]">
              <CustomSelect
                label="Plan Category"
                options={options}
                name="plan_category"
                onSelect={(e) => handleOptionSelected(e, "plan_category")}
                error={error?.plan_category}
              />
            </div>

            <div className="w-[30rem]">
              <CustomSelect
                label="Plan Title"
                options={options}
                name="plan_title"
                onSelect={(e) => handleOptionSelected(e, "plan_title")}
                error={error?.plan_title}
              />
            </div>

            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md pb-1"
              style={{
                borderColor: `${
                  error.plan_amount === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] pb-1">
                Plan Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Select"
                name="plan_amount"
                value={fields.plan_amount}
                className="pl-2 outline-none"
                onChange={handleInputValues}
              />
            </div>

            <div className="w-[30rem]">
              <CustomSelect
                label="Duration"
                options={options}
                name="duration"
                onSelect={(e) => handleOptionSelected(e, "duration")}
                error={error.duration}
              />
            </div>

            <div className="w-[30rem]">
              <CustomSelect
                label="Plan Status"
                options={options}
                name="plan_status"
                onSelect={(e) => handleOptionSelected(e, "plan_status")}
                error={error.plan_status}
              />
            </div>

            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${
                  error.description === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="6"
                value={fields.description}
                placeholder="Type..."
                className="pl-2 border-none outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* buttons */}
            <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-8 mt-6">
              <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md">
                Cancel
              </button>
              <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white">
                Submit Tip
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
