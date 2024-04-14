import { useState } from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import { Modal } from "../../common/modal/Modal";

export const AddMessageAutomation = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({});
  const [error, setError] = useState({
    stock_name: "",
    message_1: "",
    message_2: "",
    message_3: "",
    message_4: "",
    message_5: "",
    message_6: "",
  });

  // validate form
  const validationForm = () => {
    const {
      stock_name,
      message_1,
      message_2,
      message_3,
      message_4,
      message_5,
      message_6,
    } = fields;

    if (!stock_name) {
      setError((pre) => {
        return { ...pre, stock_name: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, stock_name: "" };
      });
    }

    if (!message_1) {
      setError((pre) => {
        return { ...pre, message_1: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_1: "" };
      });
    }

    if (!message_2) {
      setError((pre) => {
        return { ...pre, message_2: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_2: "" };
      });
    }

    if (!message_3) {
      setError((pre) => {
        return { ...pre, message_3: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_3: "" };
      });
    }

    if (!message_4) {
      setError((pre) => {
        return { ...pre, message_4: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_4: "" };
      });
    }

    if (!message_5) {
      setError((pre) => {
        return { ...pre, message_5: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_5: "" };
      });
    }

    if (!message_6) {
      setError((pre) => {
        return { ...pre, message_6: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_6: "" };
      });
    }
  };

  const handleInputValues = (e) => {
    const { value, name, type } = e.target;
    setFields((pre) => {
      if (type === "text" || type === "textarea") {
        return {
          ...pre,
          [name]: value,
        };
      } else {
        const updatedFields = { ...pre };
        delete updatedFields[name];
        return updatedFields;
      }
    });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
  };

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader
        module={"Market Management"}
        subModule={"Add Price Automation"}
      />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-2 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="flex flex-col gap-3">
            {/* stock name input  */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${
                  error.stock_name === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Stock Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="stock_name"
                placeholder="Select"
                className="pl-2 outline-none"
                onChange={handleInputValues}
              />
            </div>

            {/* Message 1  */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_1 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 1<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_1"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* Message 2  */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_2 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 2<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_2"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* Message 3 */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_3 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 3<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_3"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* Message 4 */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_4 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 4<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_4"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* Message 5 */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_5 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 5<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_5"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>

            {/* Message 6 */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.message_6 === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Message 6<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message_6"
                cols="30"
                rows="1"
                placeholder="Type..."
                className="pl-2 outline-none"
                onChange={handleInputValues}
              ></textarea>
            </div>
          </div>
          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-8">
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md">
              Cancel
            </button>
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white">
              Submit Tip
            </button>
          </div>
        </form>
      </section>

      {showModal && (
        <Modal title={"Message Atomation"} setShowModal={setShowModal} />
      )}
    </div>
  );
};
