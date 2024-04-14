import { viewAllPriceAutomation } from "../../../assets/jsonData/JsonData";
import { Table } from "../../common/Table/Table";
import { SearchIcon } from "../../common/icons/Icons";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";


// import svg images
import editaction from '../../../assets/svg/editaction.svg'
import deleteaction from '../../../assets/svg/deleteaction.svg'

export const ViewAllPriceAutomation = () => {

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        paddingTop: "12px",
        paddingBottom: "12px",
        color: "#566a7f",
        fontWeight: "bold",
        borderTop: "1px solid rgba(0,0,0,.12)"
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        paddingTop: "12px",
        paddingBottom: "12px",
        color: "#566a7f",
        width: "120px"
      },
    },
  };

  const columns =
    [
      {
        name: "Market Plan",
        selector: (row) => row.market_plan,
        sortable: true,
        width: "220px"
      },
      {
        name: "Start Date",
        selector: (row) => row.start_date,
        sortable: true,
      },
      {
        name: "End Date",
        selector: (row) => row.end_date,
        sortable: true,
      },
      {
        name: "Stop Loss",
        selector: (row) => row.stop_loss,
        sortable: true,
      },
      {
        name: "Ref.Target",
        selector: (row) => row.ref_target,
        sortable: true,
      },
      {
        name: "Ref.Stop loss",
        selector: (row) => row.ref_stop_loss,
        sortable: true,
      },
      {
        name: "TG 1",
        selector: (row) => row.tg_1,
        sortable: true,
      },
      {
        name: "SL 1",
        selector: (row) => row.sl_1,
        sortable: true,
      },
      {
        name: "TG 2",
        selector: (row) => row.tg_2,
        sortable: true,
      },
      {
        name: "SL 2",
        selector: (row) => row.sl_2,
        sortable: true,
      },
      {
        name: "TG 3",
        selector: (row) => row.tg_3,
        sortable: true,
      },
      {
        name: "SL 3",
        selector: (row) => row.sl_3,
        sortable: true,
      },
      {
        name: "TG 4",
        selector: (row) => row.tg_4,
        sortable: true,
      },
      {
        name: "SL 4",
        selector: (row) => row.sl_4,
        sortable: true,
      },
      {
        name: "TG 5",
        selector: (row) => row.tg_5,
        sortable: true,
      },
      {
        name: "SL 5",
        selector: (row) => row.sl_5,
        sortable: true,
      },
      {
        name: "TG 6",
        selector: (row) => row.tg_6,
        sortable: true,
      },
      {
        name: "SL 6",
        selector: (row) => row.sl_6,
        sortable: true,
      },
      {
        name: "TG 7",
        selector: (row) => row.tg_7,
        sortable: true,
      },
      {
        name: "SL 7",
        selector: (row) => row.sl_7,
        sortable: true,
      },
      {
        name: "Actions",
        cell: (cells) => <div className="flex gap-2">
          <button onClick={() => console.log(cells)}>
            <img src={editaction} />
          </button>
          <button onClick={() => console.log(cells)}>
            <img src={deleteaction} />
          </button>
        </div>,
      },
    ]

  return (
    <div className="flex flex-[0.85] flex-col overflow-auto">
      <ModuleHeader module={"Market Management"} subModule={"View All Price Automation"} />
      <section className="h-full w-full flex-1 bg-white px-2 pt-2 pb-16 border-[12px] border-bgModulePage overflow-auto scrollBar-sm">
        {/* top header */}
        <div className="top-header py-1 px-2  mb-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            {/* heading and search bar  */}
            <div className="left-content flex gap-5">
              <div className="heading">
                <p className="font-text whitespace-nowrap">Work Order Activities</p>
              </div>
              <div className="search relative">
                <input type="text" placeholder="Search by Site ID" className="border ps-10 w-72 py-[2px] outline-none rounded text-general" />
                <div className="icon absolute top-2/4 translate-y-[-50%] left-3">
                  <SearchIcon className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* buttons */}

            <div className="buttons-group flex flex-wrap gap-3">
              <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Delete Tip</button>
              <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Shoot Now</button>
              <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Stop Tip</button>
              <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Close Tip</button>
              <button className="bg-white text-bgTopBtn rounded w-32 py-1 font-text border border-bgTopBtn ms-3">Filter</button>
            </div>
          </div>
        </div>

        {/* top header */}

        {/* table */}
        <div className="w-full">
          <Table data={viewAllPriceAutomation} columns={columns} customStyles={customStyles} />
        </div>
      </section>
    </div >
  )
};
