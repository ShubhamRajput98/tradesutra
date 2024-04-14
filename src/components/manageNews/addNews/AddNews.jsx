import React from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { DatePicker } from "../../common/datePicker/DatePicker";
import { useState } from "react";
import { DragAndDrop } from "../../common/dragAndDrop/DragAndDrop";
import { Modal } from "../../common/modal/Modal";

export const AddNews = () => {
  let [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [fields, setFields] = useState({});
  const [error, setError] = useState({
    news_title: "",
    message_description: "",
    schedule_date: "",
    schedule_time: "",
  });

  // validate form
  const validationForm = () => {
    const { news_title, message_description, schedule_date, schedule_time } =
      fields;

    if (!news_title) {
      setError((pre) => {
        return { ...pre, news_title: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, news_title: "" };
      });
    }

    if (!message_description) {
      setError((pre) => {
        return { ...pre, message_description: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, message_description: "" };
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

  const handleInputValues = (e) => {
    const { value, name, type } = e.target;

    setFields((pre) => {
      if (type === "text" || type === "textarea" || type === "time") {
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

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleOptionSelected = (e, name) => {
    setFields({ ...fields, [name]: e.value });
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

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
      <ModuleHeader module={"Manage News"} subModule={"AddNews"} />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-4 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="w-[40%]">
            <CustomSelect
              label="News Title"
              options={options}
              name="news_title"
              onSelect={(e) => handleOptionSelected(e, "news_title")}
              error={error.news_title}
            />
          </div>

          {/* Message Description */}
          <div className="flex gap-4">
            <div
              className="flex border border-[#A0A6C0] rounded-md flex-col w-[27%] p-2 mt-5"
              style={{
                borderColor: `${
                  error.message_description === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general">
                Message Description <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="35"
                rows="5"
                name="message_description"
                placeholder="Type...."
                className="outline-none resize-none h-full w-full scrollBox"
                onChange={handleInputValues}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              {/* ######### drag and drop */}
              <DragAndDrop
                isDragging={isDragging}
                previewImage={fields?.attach_document}
                onDragEnter={(ev) => handleDragEnter(ev)}
                onDragLeave={(ev) => handleDragLeave(ev)}
                onDrop={(ev) => handleDrop(ev)}
                onFileInputChange={(ev) => handleFileInputChange(ev)}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            {/* ############date */}
            <div
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
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
                name={"schedule_date"}
                selectedDate={fields?.schedule_date}
                setFields={setFields}
                setError={setError}
              />
            </div>

            {/* ########### time */}
            <div
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
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

          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 mt-10 bg-white text-[#2F385B] text-bold xl:mt-10">
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
              Add News
            </button>
          </div>
        </form>
      </section>

      {showModal && <Modal title={"News"} setShowModal={setShowModal} />}
    </div>
  );
};
