import blankIcon from "../../../assets/svg/blankPage.svg";

export const BlankPage = ({ message }) => {
  return (
    <section className="sidebarBox flex-[0.85] flex flex-col items-center justify-center gap-12 overflow-y-scroll">
      {/* ######### prop msg from router */}
      <h1 className="text-max font-heading text-center text-poppins">{message}</h1>
      {/* ######## icon import */}
      <div>
        <img src={blankIcon} />
      </div>
    </section>
  );
};
