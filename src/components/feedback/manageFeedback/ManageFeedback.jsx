import { useState } from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import CloseIcon from "../../../assets/svg/Close.svg";
import React from "react";
import { Modal } from "../../common/modal/Modal";

export const ManageFeedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({
    feedBack: {
      question: "",
      show_comment: false, // Assuming it's a checkbox
      status: null, // Assuming it's a select option
    },
  });
  const [error, setError] = useState({
    question: "",
    show_comment: false, // Assuming it's a checkbox
    status: "",
  })
  // State to control the visibility of the input boxes
  const [inputBoxes, setInputBoxes] = useState([]);
  const [currentInputValue, setCurrentInputValue] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleOptionSelected = (e, name) => {
    setFields((pre) => ({
      ...pre,
      feedBack: {
        ...pre.feedBack,
        [name]: e.value,
      },
    }));
    setError(pre => { return { ...pre, [name]: "" } })
  };

  const handleAddQuestionsClick = (e) => {
    e.preventDefault(); // Prevent form submission
    const newInputBoxes = [...inputBoxes];
    newInputBoxes.push({
      id: Date.now(),
      value: currentInputValue,
    });
    setInputBoxes(newInputBoxes);
    setCurrentInputValue("");

    // Update the formData state when inputBoxes change
    // setFields((prevData) => ({
    //   ...prevData,
    //   ["question_group"]: newInputBoxes,
    // }));
  };

  const handleInputCloseClick = (id) => {
    const newInputBoxes = fields?.question_group?.filter(
      (box) => box.id !== id
    );
    setInputBoxes(newInputBoxes);
    setFields((pre) => {
      return {
        ...pre,
        ["question_group"]: newInputBoxes,
      };
    });
  };

  const handleInputValues = (e) => {
    const { value, name, checked, type } = e.target;

    if (type === "checkbox") {
      setFields((pre) => ({
        ...pre,
        feedBack: {
          ...pre.feedBack,
          [name]: checked,
        },
      }));
    } else {
      setFields((pre) => ({
        ...pre,
        feedBack: {
          ...pre.feedBack,
          [name]: value,
        },
      }));
    }
    setError(pre => { return { ...pre, [name]: "" } })
  };

  // validate form 
  const validationForm = () => {
    const { question, status } = fields.feedBack

    if (!question) {
      setError(pre => { return { ...pre, question: "red" } })
    } else {
      setError(pre => { return { ...pre, question: "" } })
    }


    if (!status) {
      setError(pre => { return { ...pre, status: "red" } })
    } else {
      setError(pre => { return { ...pre, status: "" } })
    }

  }

  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm()
    // setShowModal(true);
  };

  console.log(fields)

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader module={"Feedback"} subModule={"Manage Feedback"} />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-4 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="flex justify-between w-[36.25rem]">
            <h2 className="font-bold pt-1.5">Feedback Questions</h2>
            <button
              className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-sm bg-[#2F385B] text-white"
              onClick={handleAddQuestionsClick}
            >
              Add Questions
            </button>
          </div>

          <div className="w-[36rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
            style={{ borderColor: `${error.question === 'red' ? 'red' : '#A0A6C0'}` }}>
            <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
              Enter Question<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Select"
              name="question"
              className="pl-2 outline-none"
              onChange={handleInputValues}
            />
          </div>

          {inputBoxes.map((inputBox) => (
            <div
              key={inputBox.id}
              className="w-[36rem] h-[3.5rem] flex flex-col border border-[#A0A6C0] rounded-md bg-white"
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Enter Question <span className="text-red-500">*</span>
              </label>
              <div className="pl-2 flex flex-1 justify-between">
                <input
                  className="outline-none border-none w-full"
                  type="text"
                  name="question_group"
                  placeholder="Select"
                  value={inputBox.value}
                  onChange={(e) => {
                    const newInputBoxes = [...inputBoxes];
                    const updatedBox = newInputBoxes.find(
                      (box) => box.id === inputBox.id
                    );
                    updatedBox.value = e.target.value;
                    setFields((pre) => {
                      if (updatedBox.value) {
                        return {
                          ...pre,
                          [e.target.name]: newInputBoxes,
                        };
                      } else {
                        return {
                          ...pre,
                          [e.target.name]: pre?.question_group?.filter(
                            (box) => box.id !== inputBox.id
                          )
                        }
                      }
                    });
                  }}
                />
                <button
                  className="pr-2 text-textBlack"
                  onClick={() => handleInputCloseClick(inputBox.id)} // Remove input box on click
                >
                  <img src={CloseIcon} alt="Close" />
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center  gap-2"
          >
            <input
              type="checkbox"
              className="h-4 w-4 accent-bgDarkBlue"
              name="show_comment"
              value="show_comment"
              onChange={handleInputValues}
            />
            <label className="text-major font-text">Show In Comment Box?</label>
          </div>

          <div className="w-[36rem]">
            <CustomSelect
              className="overflow-hidden"
              label="Status"
              options={options}
              selectedOption={fields.status}
              onSelect={(e) => handleOptionSelected(e, "status")}
              error={error.status}
            />
          </div>

          {/* buttons */}
          <div className="flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold mb-[15rem] xl:mt-8">
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md">
              Cancel
            </button>
            <button
              type="submit"
              className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white"
            >
              Add Plan
            </button>
          </div>
        </form>
      </section>
      {showModal && <Modal title={"Feedback"} setShowModal={setShowModal} />}
    </div>
  );
};
