import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { useState } from "react";
import { Modal } from "../../common/modal/Modal";

export const AddReference = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({});
  const [otherCheckBoxChecked, setOtherCheckBoxChecked] = useState(false);

  const [error, setError] = useState({
    exchange_change: "",
    exchange_manually: "",
    estimated_price: "",
    estimated_price_1: "",
    estimated_price_2: "",
    estimated_price_3: "",
    estimated_price_4: "",
    estimated_price_5: "",
  });

  // validate form
  const validationForm = () => {
    const {
      exchange_change,
      exchange_manually,
      estimated_price,
      estimated_price_1,
      estimated_price_2,
      estimated_price_3,
      estimated_price_4,
      estimated_price_5,
    } = fields;

    if (!exchange_change) {
      setError((pre) => {
        return { ...pre, exchange_change: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, exchange_change: "" };
      });
    }

    if (!exchange_manually) {
      setError((pre) => {
        return { ...pre, exchange_manually: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, exchange_manually: "" };
      });
    }

    if (!estimated_price) {
      setError((pre) => {
        return { ...pre, estimated_price: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price: "" };
      });
    }

    if (!estimated_price_1) {
      setError((pre) => {
        return { ...pre, estimated_price_1: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price_1: "" };
      });
    }

    if (!estimated_price_2) {
      setError((pre) => {
        return { ...pre, estimated_price_2: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price_2: "" };
      });
    }

    if (!estimated_price_3) {
      setError((pre) => {
        return { ...pre, estimated_price_3: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price_3: "" };
      });
    }

    if (!estimated_price_4) {
      setError((pre) => {
        return { ...pre, estimated_price_4: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price_4: "" };
      });
    }

    if (!estimated_price_5) {
      setError((pre) => {
        return { ...pre, estimated_price_5: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, estimated_price_5: "" };
      });
    }
  };

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
    const { value, name, checked } = e.target;
    setFields((pre) => {
      if (checked) {
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

  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
  };

  const handleOptionSelected = (e, name) => {
    setFields({ ...fields, [name]: e.value });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader module={"Manage Tips"} subModule={"Add Reference"} />
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
                  name="NSE"
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
                  name="NSE-FUT"
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
                  name="NSE-OPT"
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
                  name="MCX-FUT"
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
                  name="MCX-OPT"
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
                  name="CDS-OPT"
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
                  name="CDS-FUT"
                  value="CDS-FUT"
                  className="h-4 w-4 accent-bgDarkBlue"
                  onChange={handleInputValues}
                />
                <label htmlFor="CDS-FUT">CDS-FUT</label>
              </div>
            </div>
          </div>

          {/* market plan type */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Select Exchange Code</h2>

            {/* market plan type checkboxes */}
            <div className="flex gap-4">
              {/* box1 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="select_all"
                  name="select"
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
                  name="select"
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
                  name="select"
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
              Tip Basic{" "}
              <span className="text-[#656976] font-text">
                (Select Tip Type)
              </span>
            </h2>

            {/* radio1 */}
            <div className="flex gap-4">
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="buy"
                  name="tip_basic"
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
                  id="sell"
                  name="tip_basic"
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
                label="Exchange Change"
                options={options}
                name="exchange_change"
                onSelect={(e) => handleOptionSelected(e, "exchange_change")}
                error={error.exchange_change}
              />
            </div>

            {/* ######exchange manually */}
            <div className="w-[20rem]">
              <CustomSelect
                label="Exchange (Manually)"
                options={options}
                name="exchange_manually"
                onSelect={(e) => handleOptionSelected(e, "exchange_manually")}
                error={error.exchange_manually}
              />
            </div>

            {/* estimated price */}
            <div className="w-[20rem]">
              <CustomSelect
                label="Estimated Price"
                options={options}
                name="estimated_price"
                onSelect={(e) => handleOptionSelected(e, "estimated_price")}
                error={error.estimated_price}
              />
            </div>
          </div>

          {/* ############## tip reference */}

          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-textBlack">Tips Reference Section</h1>
            {/* ############ dropdowns */}
            <div className="flex gap-4 flex-wrap">
              {/* drop1 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Estimated Price "
                  name="estimated_price_1"
                  options={options}
                  onSelect={(e) => handleOptionSelected(e, "estimated_price_1")}
                  error={error.estimated_price_1}
                />
              </div>

              {/* drop2 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Estimated Price "
                  name="estimated_price_2"
                  options={options}
                  onSelect={(e) => handleOptionSelected(e, "estimated_price_2")}
                  error={error.estimated_price_2}
                />
              </div>

              {/* drop3 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Estimated Price "
                  name="estimated_price_3"
                  options={options}
                  onSelect={(e) => handleOptionSelected(e, "estimated_price_3")}
                  error={error.estimated_price_3}
                />
              </div>

              {/* drop4 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Estimated Price "
                  name="estimated_price_4"
                  options={options}
                  onSelect={(e) => handleOptionSelected(e, "estimated_price_4")}
                  error={error.estimated_price_4}
                />
              </div>

              {/* drop5 */}
              <div className="w-[20rem]">
                <CustomSelect
                  className="overflow-hidden"
                  label="Estimated Price "
                  options={options}
                  name="estimated_price_5"
                  onSelect={(e) => handleOptionSelected(e, "estimated_price_5")}
                  error={error.estimated_price_5}
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
              Submit Tip
            </button>
          </div>
        </form>
      </section>

      {showModal && <Modal title={"Reference"} setShowModal={setShowModal} />}
    </div>
  );
};
