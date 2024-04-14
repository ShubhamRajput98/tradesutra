import React from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { useState } from "react";
import { Modal } from "../../common/modal/Modal";
import { AddNewTipsLoader } from "../../../controllers/services/loaderMethods/ManageTips/addNewTipsLoader/AddNewTipsLoader";
import { useDispatch } from "react-redux";

export const AddNewTips = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({ exchangeCode: [] });
  const [otherCheckBoxChecked, setOtherCheckBoxChecked] = useState(false);

  const [error, setError] = useState({
    exchangeChange: "",
    exchangeManually: "",
    estimatePrice: "",
    messageAutomization: "",
    priceAutomization: "",
  });

  let Auth = false;
  const dispatch = useDispatch()


  const handleOtherCheckBox = (e) => {
    const { checked, name } = e.target;
    setOtherCheckBoxChecked(checked);

    // single box check
    if (checked) {
      const allCheckboxValues = ["swing", "intraday"];
      setFields((pre) => {
        // return checked box
        return {
          ...pre,
          [name]: allCheckboxValues,
        };
      });
    } else {
      setFields((pre) => {
        // remove unchecked box
        return {
          ...pre,
          [name]: [],
        };
      });
    }
  };

  const handleCheckBox = (e) => {
    const { value, checked, name } = e.target;
    // if select all is checked return name and value inclusive object
    if (otherCheckBoxChecked) {
      setFields((pre) => {
        // return an object of the value which was selected
        if (checked && !pre?.select?.includes(value)) {
          return {
            ...pre,
            [name]: [value],
          };
          // if any of the checkbox is unchecked then uncheck 'select all'
        } else if (!checked) {
          setOtherCheckBoxChecked(false);
          // when one checkbox is unchecked then filter that box
          return {
            ...pre,
            [name]: pre?.select?.filter((item) => item !== value),
          };
        } else {
          // return the object after filtering out the box which was unchecked
          return { ...pre };
        }
      });
    } else {
      // (single)
      if (checked) {
        setFields((pre) => {
          // return the checked box
          return {
            ...pre,
            [name]: [value],
          };
        });
      } else {
        setFields((pre) => {
          // if a box is unchecked filter out the unchecked
          return {
            ...pre,
            [name]: pre?.select?.filter((item) => item !== value),
          };
        });
      }
    }
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];


  const handleInputValues = (e) => {
    const { value, name, checked, type } = e.target;

    setFields((pre) => {
      if (checked) {
        if (name === "exchangeCode") {
          return {
            ...pre,
            [name]: [...fields.exchangeCode, value],
          };
        } else {
          return {
            ...pre,
            [name]: value
          };
        }

      } else if (!checked) {
        return {
          ...pre,
          [name]: pre?.exchangeCode?.filter((item) => item !== value),
        };
      } else if (type === "text" || type === "textarea") {
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
  };


  const handleOptionSelected = (e, name) => {
    setFields({ ...fields, [name]: e.value });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };



  // validate form
  const validationForm = () => {
    const {
      exchangeChange,
      exchangeManually,
      estimatePrice,
      messageAutomization,
      priceAutomization,
    } = fields;

    if (!exchangeChange) {
      Auth = false;
      setError((pre) => {
        return { ...pre, exchangeChange: "red" };
      });
    } else {
      Auth = true;
      setError((pre) => {
        return { ...pre, exchangeChange: "" };
      });
    }

    if (!exchangeManually) {
      Auth = false;
      setError((pre) => {
        return { ...pre, exchangeManually: "red" };
      });
    } else {
      Auth = true;
      setError((pre) => {
        return { ...pre, exchangeManually: "" };
      });
    }

    if (!estimatePrice) {
      Auth = false;
      setError((pre) => {
        return { ...pre, estimatePrice: "red" };
      });
    } else {
      Auth = true;
      setError((pre) => {
        return { ...pre, estimatePrice: "" };
      });
    }

    if (!messageAutomization) {
      Auth = false;
      setError((pre) => {
        return { ...pre, messageAutomization: "red" };
      });
    } else {
      Auth = true;
      setError((pre) => {
        return { ...pre, messageAutomization: "" };
      });
    }

    if (!priceAutomization) {
      Auth = false;
      setError((pre) => {
        return { ...pre, priceAutomization: "red" };
      });
    } else {
      Auth = true;
      setError((pre) => {
        return { ...pre, priceAutomization: "" };
      });
    }
  };


  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
    // if (Auth) {
    //   dispatch(AddNewTipsLoader(fields))
    // } else {
    //   console.log("Auth false")
    // }
  };


  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader module={"Manage Tips"} subModule={"Add New Tip"} />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto px-4 pt-2 pb-16 border-[12px] border-bgModulePage">
        <form
          onSubmit={(e) => SubmitForm(e)}
          className="h-full w-full flex flex-col gap-6 xl:h-max"
        >
          {/* exchange code */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Select Exchange Code</h2>

            {/* exchange code checkboxes */}
            <div className="flex gap-4 flex-wrap">
              {/* box1 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="NSE"
                  name="exchangeCode"
                  value="NSE"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="NSE">NSE</label>
              </div>

              {/* box2 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="NSE-FUT"
                  name="exchangeCode"
                  value="NSE-FUT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="NSE-FUT">NSE-FUT</label>
              </div>

              {/* box3 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="NSE-OPT"
                  name="exchangeCode"
                  value="NSE-OPT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="NSE-OPT">NSE-OPT</label>
              </div>

              {/* box4 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="MCX-FUT"
                  name="exchangeCode"
                  value="MCX-FUT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="MCX-FUT">MCX-FUT</label>
              </div>

              {/* box5 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="MCX-OPT"
                  name="exchangeCode"
                  value="MCX-OPT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="MCX-OPT">MCX-OPT</label>
              </div>

              {/* box6 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="CDS-OPT"
                  name="exchangeCode"
                  value="CDS-OPT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="CDS-OPT">CDS-OPT</label>
              </div>

              {/* box7 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="CDS-FUT"
                  name="exchangeCode"
                  value="CDS-OPT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="CDS-FUT">CDS-FUT</label>
              </div>
            </div>
          </div>

          {/* market plan type */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Select Market Plan Type</h2>

            {/* market plan type checkboxes */}
            <div className="flex gap-4">
              {/* box1 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="select_all"
                  name="marketSegment"
                  value="select_all"
                  className="h-4 w-4 accent-bgDarkBlue"
                  checked={otherCheckBoxChecked}
                  onChange={handleOtherCheckBox}
                />
                <label htmlFor="select_all">Select All</label>
              </div>

              {/* box2 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="swing"
                  name="marketSegment"
                  value={"swing"}
                  className="h-4 w-4 accent-bgDarkBlue"
                  checked={fields.select?.includes("swing")}
                  onChange={handleCheckBox}
                />
                <label htmlFor="swing">Swing</label>
              </div>

              {/* box3 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="intraday"
                  name="marketSegment"
                  value={"intraday"}
                  className="h-4 w-4 accent-bgDarkBlue"
                  checked={fields.select?.includes("intraday")}
                  onChange={handleCheckBox}
                />
                <label htmlFor="intraday">Intraday</label>
              </div>
            </div>
          </div>

          {/* ######## tip basic */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-textBlack">
              Tip Basic
              <span className="text-[#656976] font-text">
                (Select Tip Type)
              </span>
            </h2>

            {/* radio1 */}
            <div className="flex gap-4">
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="Buy"
                  name="tipType"
                  value="buy"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Buy">Buy</label>
              </div>

              {/* radio2 */}
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="Sell"
                  name="tipType"
                  value="sell"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Sell">Sell</label>
              </div>
            </div>
          </div>

          {/* dropdowns */}
          <div className="flex gap-4 flex-wrap">
            {/* ######exchange change */}
            <div className="w-[20rem]">
              <CustomSelect
                label="Exchange Change "
                options={options}
                onSelect={(e) => handleOptionSelected(e, "exchangeChange")}
                error={error.exchangeChange}
              />
            </div>

            {/* ######exchange manually */}
            <div className="w-[20rem]">
              <CustomSelect
                label="Exchange (Manually)"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "exchangeManually")}
                error={error.exchangeManually}
              />
            </div>

            {/* estimated price */}
            <div className="w-[20rem]">
              <CustomSelect
                label="Estimated Price"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "estimatePrice")}
                error={error.estimatePrice}
              />
            </div>
          </div>

          {/* ######## tip publish status */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-textBlack">
              Select Tip Publish Status
            </h2>

            {/* radio1 */}
            <div className="flex gap-4">
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="publish_now"
                  name="status"
                  value="publish_now"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Buy">Publish Now</label>
              </div>

              {/* radio2 */}
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="publish_later"
                  name="status"
                  value="publish_later"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Sell">Publish Later</label>
              </div>

              {/* radio3 */}
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="shoot_now"
                  name="status"
                  value="shoot_now"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="Sell">Shoot Now</label>
              </div>
            </div>
          </div>

          {/* ############## automation */}

          <div className="flex flex-col gap-2">
            <div className="pb-4">
              <h1 className="font-bold text-textBlack">
                Message and Price atomisation for market plans
              </h1>
            </div>
            {/* ############ dropdowns */}
            <div className="flex gap-4 flex-wrap">
              {/* drop1 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Message Automization"
                  options={options}
                  onSelect={(e) =>
                    handleOptionSelected(e, "messageAutomization")
                  }
                  error={error.messageAutomization}
                />
              </div>

              {/* drop2 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Price Automisation"
                  options={options}
                  onSelect={(e) =>
                    handleOptionSelected(e, "priceAutomization")
                  }
                  error={error.priceAutomization}
                />
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-8">
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
              DONE
            </button>
          </div>
        </form>
      </section>

      {showModal && <Modal title={"Tip"} setShowModal={setShowModal} />}
    </div>
  );
};
