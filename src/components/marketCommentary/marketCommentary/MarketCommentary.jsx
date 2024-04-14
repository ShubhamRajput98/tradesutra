import React from "react";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { DatePicker } from "../../common/datePicker/DatePicker";
import { useState } from "react";
import { DragAndDrop } from "../../common/dragAndDrop/DragAndDrop";
import { Modal } from "../../common/modal/Modal";

export const MarketCommentary = () => {
  let [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({ exchange_code: "", comment_title: "", pro_idea_description: "", attach_document: "", schedule_date: "", schedule_time: "", select_user: "" });
  const [error, setError] = useState({ exchange_code: "", comment_title: "", pro_idea_description: "", attach_document: "", schedule_date: "", schedule_time: "", select_user: "" })
  const [isDragging, setIsDragging] = useState(false);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const userOptions = [
    { value: "pending", label: "Pending" },
    { value: "publish", label: "Publish" },
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
      setError((pre) => {
        return { ...pre, [ev.target.name]: "" };
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
    setError((pre) => {
      return { ...pre, [ev.target.name]: "" };
    });
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

  // validate form
  const validationForm = () => {
    const {
      exchange_code,
      comment_title,
      pro_idea_description,
      attach_document,
      schedule_date,
      schedule_time,
      select_user,
    } = fields;

    if (!exchange_code) {
      setError((pre) => {
        return { ...pre, exchange_code: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, exchange_code: "" };
      });
    }

    if (!comment_title) {
      setError((pre) => {
        return { ...pre, comment_title: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, comment_title: "" };
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

    if (!attach_document) {
      setError((pre) => {
        return { ...pre, attach_document: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, attach_document: "" };
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

    if (!select_user) {
      setError((pre) => {
        return { ...pre, select_user: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, select_user: "" };
      });
    }
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    validationForm();
    // setShowModal(true);
  };

  return (
    <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgMo">
      <ModuleHeader
        module={"Market Commentary"}
        subModule={"Market Commentary"}
      />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-4 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          {/* exchange code */}
          <div className="w-[40%]">
            <CustomSelect
              label="Exchange Code"
              options={options}
              name="exchange_code"
              onSelect={(e) => handleOptionSelected(e, "exchange_code")}
              error={error.exchange_code}
            />
          </div>

          {/* comment title */}

          <div
            className="w-[40%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
            style={{
              borderColor: `${error.comment_title === "red" ? "red" : "#A0A6C0"
                }`,
            }}
          >
            <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
              Comment Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Select"
              name="comment_title"
              className="pl-2 outline-none"
              value={fields?.comment_title}
              onChange={handleInputValues}
            />
          </div>

          <div className="flex gap-4">
            <div
              className="flex border border-[#A0A6C0] rounded-md flex-col w-[27%] p-2 mt-5"
              style={{
                borderColor: `${error.pro_idea_description === "red" ? "red" : "#A0A6C0"
                  }`,
              }}
            >
              <label className="text-[#435085] text-general">
                Pro Idea Description <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="35"
                rows="5"
                name="pro_idea_description"
                placeholder="Type..."
                value={fields?.pro_idea_description}
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
                error={error.attach_document}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            {/* ############date */}
            <div
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${error.schedule_date === "red" ? "red" : "#A0A6C0"
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
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${error.schedule_time === "red" ? "red" : "#A0A6C0"
                  }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Schedule Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                name="schedule_time"
                className="outline-none pl-2"
                value={fields?.schedule_time}
                onChange={handleInputValues}
                error={error.schedule_time}
              />
            </div>
          </div>

          <div className="w-[27%]">
            <CustomSelect
              label="Select User"
              options={userOptions}
              name="select_user"
              onSelect={(e) => handleOptionSelected(e, "select_user")}
              error={error.select_user}
            />
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
              Add Commentary
            </button>
          </div>
        </form>
      </section>

      {showModal && (
        <Modal title={"Market Commetary"} setShowModal={setShowModal} />
      )}
    </div>
  );
};
