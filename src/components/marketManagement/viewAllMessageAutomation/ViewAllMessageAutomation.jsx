import { viewAllMessageAutomation } from "../../../assets/jsonData/JsonData";
import { Table } from "../../common/Table/Table";
import { SearchIcon } from "../../common/icons/Icons";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";

export const ViewAllMessageAutomation = () => {

  const customStyles = {
    rows: {
      style: {
        minHeight: "max-content", // override the row height
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
        padding: "0.4em",
        color: "#566a7f",
        width: "220px",
        borderRight: "1px solid rgba(0,0,0,.12)",
      },
    },
  };


  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "200px"
    },
    {
      name: "Message 1",
      cell: (cells) => <div className="">{cells.message_1}</div>,
      sortable: true,
    },
    {
      name: "Message 2",
      cell: (cells) => <div className="">{cells.message_2}</div>,
      sortable: true,
    },
    {
      name: "Message 3",
      cell: (cells) => <div className="">{cells.message_3}</div>,
      sortable: true,
    },
    {
      name: "Message 4",
      cell: (cells) => <div className="">{cells.message_4}</div>,
      sortable: true,
    },
    {
      name: "Message 5",
      cell: (cells) => <div className="">{cells.message_5}</div>,
      sortable: true,
    },
    {
      name: "Message 6",
      cell: (cells) => <div className="">{cells.message_6}</div>,
      sortable: true,
    },
    {
      name: "Message 7",
      cell: (cells) => <div className="">{cells.message_7}</div>,
      sortable: true,
    },
  ]

  return (
    <div className="flex flex-[0.85] flex-col overflow-auto">
      <ModuleHeader module={"Market Management"} subModule={"View All Message Automation"} />
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
          <Table data={viewAllMessageAutomation} columns={columns} customStyles={customStyles} />
        </div>
      </section>
    </div >
  )
};
