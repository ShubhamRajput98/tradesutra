import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { useState } from "react";
import { Modal } from "../../common/modal/Modal";
import React from "react";
import { DatePicker } from "../../common/datePicker/DatePicker";
import { DragAndDrop } from "../../common/dragAndDrop/DragAndDrop";

export const AddProIdea = () => {
  let [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [fields, setFields] = useState({});
  const [otherCheckBoxChecked, setOtherCheckBoxChecked] = useState(false);

  const [error, setError] = useState({
    exchange_change: "",
    exchange_manually: "",
    estimated_price: "",
    pro_idea_description: "",
    schedule_date: "",
    schedule_time: "",
  });

  // validate form
  const validationForm = () => {
    const {
      exchange_change,
      exchange_manually,
      estimated_price,
      pro_idea_description,
      schedule_date,
      schedule_time,
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

    if (!pro_idea_description) {
      setError((pre) => {
        return { ...pre, pro_idea_description: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, pro_idea_description: "" };
      });
    }

    if (!schedule_date) {
      setError((pre) => {
        return { ...pre, schedule_date: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, schedule_date: "" };
      });
    }

    if (!schedule_time) {
      setError((pre) => {
        return { ...pre, schedule_time: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, schedule_time: "" };
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
    const { value, name, checked, type } = e.target;

    setFields((pre) => {
      if (checked) {
        return {
          ...pre,
          [name]: value,
        };
      } else if (type === "text" || type === "textarea" || type === "time") {
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

  // DragAndDrop functions
  const handleDragEnter = (ev) => {
    ev.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    setIsDragging(false);

    const files = ev.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const imageURL = URL.createObjectURL(file);
      setFields((pre) => {
        return {
          ...pre,
          [ev.target.name]: imageURL,
        };
      });
    }
  };

  const handleFileInputChange = (ev) => {
    const file = ev.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFields((pre) => {
        return {
          ...pre,
          [ev.target.name]: imageURL,
        };
      });
    }
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
  };

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader module={"Manage Tips"} subModule={"Add Pro Idea"} />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto px-4 pt-2 pb-16 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-4 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
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
                <label htmlFor="select">Select All</label>
              </div>

              {/* box2 */}
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="swing"
                  name="select"
                  value="swing"
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
                  value="intraday"
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
              Pro Ideas Description and attachment
            </h2>
            {/* radio1 */}
            <div className="flex gap-4">
              <div className="gap-2 flex items-center justify-center">
                <input
                  type="radio"
                  id="Buy"
                  value="Buy"
                  name="tip_basic"
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
                  value="Sell"
                  name="tip_basic"
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

          <div className="flex flex-col">
            <h1 className="font-bold text-textBlack">
              Pro Ideas Description and attachment
            </h1>
            <div className="flex gap-4">
              {/* ############ pro idea description */}
              <div
                className="flex border border-[#A0A6C0] rounded-md flex-col w-[25%] p-2 mt-7"
                style={{
                  borderColor: `${
                    error.pro_idea_description === "red" ? "red" : "#A0A6C0"
                  }`,
                }}
              >
                <label className="text-[#435085] text-general">
                  Pro Idea Description <span className="text-red-500">*</span>{" "}
                </label>
                <textarea
                  cols="30"
                  rows="5"
                  value={fields.pro_idea_description}
                  name="pro_idea_description"
                  placeholder="Type..."
                  className="resize-y w-full h-full outline-none"
                  onChange={handleInputValues}
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                {/* ######### drag and drop */}
                <DragAndDrop
                  name="attach_document"
                  isDragging={isDragging}
                  previewImage={fields?.attach_document}
                  onDragEnter={(ev) => handleDragEnter(ev)}
                  onDragLeave={(ev) => handleDragLeave(ev)}
                  onDrop={(ev) => handleDrop(ev)}
                  onFileInputChange={(ev) => handleFileInputChange(ev)}
                />
              </div>

              {/* ########### date and time */}

              <div className="flex flex-col gap-4 mt-7">
                {/* ############date */}
                <div
                  className="w-[20rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
                  style={{
                    borderColor: `${
                      error.schedule_date === "red" ? "red" : "#A0A6C0"
                    }`,
                  }}
                >
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                    Schedule Date <span className="text-red-500">*</span>
                  </label>
                  <DatePicker
                    name="schedule_date"
                    selectedDate={fields?.schedule_date}
                    setFields={setFields}
                    setError={setError}
                  />
                </div>

                {/* ########### time */}
                <div
                  className="w-[20rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
                  style={{
                    borderColor: `${
                      error.schedule_time === "red" ? "red" : "#A0A6C0"
                    }`,
                  }}
                >
                  <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                    Schedule Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    className="outline-none pl-2"
                    name="schedule_time"
                    onChange={handleInputValues}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-10">
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md">
              Cancel
            </button>
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white">
              Submit Tip
            </button>
          </div>
        </form>
      </section>

      {showModal && <Modal title={"Pro Idea"} setShowModal={setShowModal} />}
    </div>
  );
};
