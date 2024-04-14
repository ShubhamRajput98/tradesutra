import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import CustomSelect from "../../common/customSelect/CustomSelect";
import { useState } from "react";
import { Modal } from "../../common/modal/Modal";

export const AddMarketPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({});

  const [error, setError] = useState({
    market_name: "",
    exchange_name: "",
    market_time_frame: "",
    contract_name: "",
    atomisation_set: "",
    price_atomisation: "",
    quantity: "",
  });

  // validate form
  const validationForm = () => {
    const {
      market_name,
      exchange_name,
      market_time_frame,
      contract_name,
      atomisation_set,
      price_atomisation,
      quantity,
    } = fields;

    if (!market_name) {
      setError((pre) => {
        return { ...pre, market_name: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, market_name: "" };
      });
    }

    if (!exchange_name) {
      setError((pre) => {
        return { ...pre, exchange_name: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, exchange_name: "" };
      });
    }

    if (!market_time_frame) {
      setError((pre) => {
        return { ...pre, market_time_frame: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, market_time_frame: "" };
      });
    }

    if (!contract_name) {
      setError((pre) => {
        return { ...pre, contract_name: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, contract_name: "" };
      });
    }

    if (!atomisation_set) {
      setError((pre) => {
        return { ...pre, atomisation_set: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, atomisation_set: "" };
      });
    }

    if (!price_atomisation) {
      setError((pre) => {
        return { ...pre, price_atomisation: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, price_atomisation: "" };
      });
    }

    if (!quantity) {
      setError((pre) => {
        return { ...pre, quantity: "red" };
      });
    } else {
      setError((pre) => {
        return { ...pre, quantity: "" };
      });
    }
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
        subModule={"Add Market Plan"}
      />
      <section className="h-full w-full scrollBox flex-1 bg-white flex overflow-auto p-3 border-[12px] border-bgModulePage">
        <form
          className="h-full w-full flex flex-col gap-6 xl:h-max"
          onSubmit={(e) => SubmitForm(e)}
        >
          <div className="flex flex-col gap-2">
            {/* market name input  */}
            <div
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${
                  error.market_name === "red" ? "red" : "#A0A6C0"
                }`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Market Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="market_name"
                placeholder="Select"
                className="pl-2 outline-none"
                onChange={handleInputValues}
                error={error.market_name}
              />
            </div>

            {/* dropdowns */}
            <div className="w-[27%]">
              <CustomSelect
                label="Exchange Name"
                name="exchange_name"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "exchange_name")}
                error={error.exchange_name}
              />
            </div>

            <div className="w-[27%]">
              <CustomSelect
                label="Market Time frame "
                name="market_time_frame"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "market_time_frame")}
                error={error.market_time_frame}
              />
            </div>

            <div className="w-[27%]">
              <CustomSelect
                label="Contract Name"
                name="contract_name"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "contract_name")}
                error={error.contract_name}
              />
            </div>

            <div className="w-[27%]">
              <CustomSelect
                label="Atomisation Set"
                name="atomisation_set"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "atomisation_set")}
                error={error.atomisation_set}
              />
            </div>

            <div className="w-[27%]">
              <CustomSelect
                label="Price Atomisation Set"
                name="price_atomisation"
                options={options}
                onSelect={(e) => handleOptionSelected(e, "price_atomisation")}
                error={error.price_atomisation}
              />
            </div>

            {/* quantity input  */}
            <div
              className="w-[27%] flex flex-col border border-[#A0A6C0] rounded-md bg-white pb-1"
              style={{
                borderColor: `${error.quantity === "red" ? "red" : "#A0A6C0"}`,
              }}
            >
              <label className="text-[#435085] text-general pl-2 pt-[2.5px]">
                Quantity<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Select"
                name="quantity"
                className="pl-2 outline-none"
                onChange={(e) => handleInputValues(e, "quantity")}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <input
                type="checkbox"
                onChange={handleInputValues}
                name="default"
                value="default"
              />
              <label className="text-bold text-major font-text">Default</label>
            </div>
          </div>

          {/* buttons */}
          <div className="h-full flex gap-4 flex-1 items-end bg-white text-[#2F385B] text-bold xl:mt-8">
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md">
              Cancel
            </button>
            <button className="w-[10rem] h-[2.5rem] border border-[#2F385B] rounded-md bg-[#2F385B] text-white">
              DONE
            </button>
          </div>
        </form>
      </section>

      {showModal && <Modal title={"Market Plan"} setShowModal={setShowModal} />}
    </div>
  );
};
