import rightIcon from "../../../assets/svg/right.svg";

export const Modal = ({ title, setShowModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-black/20 w-screen h-screen flex justify-center items-center font-poppins">
      <dialog
        open
        className="w-[30%] h-[40%] items-center justify-evenly flex flex-col bg-white  rounded-sm"
      >
        <img src={rightIcon} className="w-[4rem] h-[4rem]" />
        <div className="flex flex-col items-center justify-center gap-1 text-major">
          <p className="font-heading">{title} has been successfully created </p>
          <p className="font-bold">Axis Bank</p>
        </div>
        <button onClick={() => setShowModal(false)} className="p-2 w-[60%] border border-[#2F385B] rounded-md bg-[#2F385B] text-white text-general">
          DONE
        </button>
      </dialog>
    </div>
  );
};
