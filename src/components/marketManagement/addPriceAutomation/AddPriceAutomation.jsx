import { useState } from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import { Modal } from "../../common/modal/Modal";
import { useDispatch } from "react-redux";
import { AddPriceAutomationLoader } from "../../../controllers/services/loaderMethods/MarketManagement/addPriceAutomation/AddPriceAutomationLoader";

export const AddPriceAutomation = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({});
  const [error, setError] = useState({
    stockName: "",
    referenceTarget: "",
    targetOne: "",
    targetTwo: "",
    targetThree: "",
    targetFour: "",
    targetFive: "",
    targetSix: "",
    targetSeven: "",
    referenceSL: "",
    slOne: "",
    slTwo: "",
    slThree: "",
    slFour: "",
    slFive: "",
    slSix: "",
    slSeven: ""
  });

  let valid = false;
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()

  // validate form
  const validationForm = () => {
    const {
      stockName,
      referenceTarget,
      targetOne,
      targetTwo,
      targetThree,
      targetFour,
      targetFive,
      targetSix,
      targetSeven,
      referenceSL,
      slOne,
      slTwo,
      slThree,
      slFour,
      slFive,
      slSix,
      slSeven
    } = fields;

    if (!stockName) {
      setError((pre) => {
        return { ...pre, stockName: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, stockName: "" };
      });
    }

    if (!referenceTarget) {
      setError((pre) => {
        return { ...pre, referenceTarget: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, referenceTarget: "" };
      });
    }

    if (!targetOne) {
      setError((pre) => {
        return { ...pre, targetOne: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetOne: "" };
      });
    }

    if (!targetTwo) {
      setError((pre) => {
        return { ...pre, targetTwo: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetTwo: "" };
      });
    }

    if (!targetThree) {
      setError((pre) => {
        return { ...pre, targetThree: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetThree: "" };
      });
    }

    if (!targetFour) {
      setError((pre) => {
        return { ...pre, targetFour: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetFour: "" };
      });
    }

    if (!targetFive) {
      setError((pre) => {
        return { ...pre, targetFive: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetFive: "" };
      });
    }

    if (!targetSix) {
      setError((pre) => {
        return { ...pre, targetSix: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetSix: "" };
      });
    }

    if (!targetSeven) {
      setError((pre) => {
        return { ...pre, targetSeven: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, targetSeven: "" };
      });
    }

    if (!referenceSL) {
      setError((pre) => {
        return { ...pre, referenceSL: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, referenceSL: "" };
      });
    }

    if (!slOne) {
      setError((pre) => {
        return { ...pre, slOne: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slOne: "" };
      });
    }

    if (!slTwo) {
      setError((pre) => {
        return { ...pre, slTwo: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slTwo: "" };
      });
    }

    if (!slThree) {
      setError((pre) => {
        return { ...pre, slThree: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slThree: "" };
      });
    }

    if (!slFour) {
      setError((pre) => {
        return { ...pre, slFour: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slFour: "" };
      });
    }

    if (!slFive) {
      setError((pre) => {
        return { ...pre, slFive: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slFive: "" };
      });
    }

    if (!slSix) {
      setError((pre) => {
        return { ...pre, slSix: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slSix: "" };
      });
    }

    if (!slSeven) {
      setError((pre) => {
        return { ...pre, slSeven: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, slSeven: "" };
      });
    }
  };

  const handleInputValues = (e) => {
    const { value, name, checked, type } = e.target;
    setFields((pre) => {
      if (checked) {
        return {
          ...pre,
          [name]: value,
        };
      } else if (type === "text" || type === "number") {
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
      if (value) {
        return { ...pre, [name]: "" };
      } else {
        return { ...pre, [name]: "red" };
      }
    });
  };

  const SubmitForm = (e) => {
    const {
      stockName,
      referenceTarget,
      targetOne,
      targetTwo,
      targetThree,
      targetFour,
      targetFive,
      targetSix,
      targetSeven,
      referenceSL,
      slOne,
      slTwo,
      slThree,
      slFour,
      slFive,
      slSix,
      slSeven
    } = fields;

    e.preventDefault();
    validationForm();
    if (stockName &&
      referenceTarget &&
      targetOne &&
      targetTwo &&
      targetThree &&
      targetFour &&
      targetFive &&
      targetSix &&
      targetSeven &&
      referenceSL &&
      slOne &&
      slTwo &&
      slThree &&
      slFour &&
      slFive &&
      slSix &&
      slSeven) {
      valid = true;
    } else {
      valid = false;
    }


    if (valid) {
      dispatch(AddPriceAutomationLoader(fields, token))
    } else {
      alert("All feilds are required")
    }
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
          onSubmit={SubmitForm}
        >
          {/* stock name big input box */}
          <div className="flex flex-col gap-3">
            {/* market name input  */}
            <div
              className="w-[30rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
              style={{
                borderColor: `${error.stockName === "red" ? "red" : "#A0A6C0"
                  }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                Stock Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Select"
                className="pl-2 outline-none"
                name="stockName"
                onChange={handleInputValues}
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* Reference target */}
            <div className="flex flex-col gap-1">
              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
                style={{
                  borderColor: `${error.referenceTarget === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Reference Target<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none w-full"
                    name="referenceTarget"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetOne === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 1<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetOne"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetTwo === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 2<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetTwo"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetThree === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 3<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetThree"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetFour === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 4<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetFour"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetFive === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 5<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetFive"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetSix === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 6<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetSix"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.targetSeven === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Target 7<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="targetSeven"
                    onChange={handleInputValues}
                  />
                </div>
              </div>
            </div>

            {/* Reference SL */}
            <div className="flex flex-col gap-1">
              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.referenceSL === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Reference SL<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="referenceSL"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slOne === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 1<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="slOne"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slTwo === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 2<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="slTwo"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slThree === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 3<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="slThree"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slFour === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 4<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="slFour"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slFive === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 5<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-2 outline-none"
                    name="slFive"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slSix === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 6<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-4 outline-none"
                    name="slSix"
                    onChange={handleInputValues}
                  />
                </div>
              </div>

              <div
                className="w-[14.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1 "
                style={{
                  borderColor: `${error.slSeven === "red" ? "red" : "#A0A6C0"
                    }`,
                }}
              >
                <div>
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px] ">
                    Stop Loss 7<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select"
                    className="pl-4 outline-none"
                    name="slSeven"
                    onChange={handleInputValues}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* stATUS */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-textBlack">Status</h2>

            {/* radio1 */}
            <div className="flex gap-4">
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="Enable"
                  name="status"
                  value="enable"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Enable">Enable</label>
              </div>

              {/* radio2 */}
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="Disable"
                  name="status"
                  value="disable"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Disable">Disable</label>
              </div>
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
        <Modal title={"Price Automation"} setShowModal={setShowModal} />
      )}
    </div>
  );
};
