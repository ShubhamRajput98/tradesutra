import { viewFeedBack } from "../../../assets/jsonData/JsonData";
import { Table } from "../../common/Table/Table";
import { SearchIcon } from "../../common/icons/Icons";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";



// import svg images
import editaction from '../../../assets/svg/editaction.svg'
import deleteaction from '../../../assets/svg/deleteaction.svg'

export const SubmittedFeedback = () => {



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
        name: "ID",
        selector: (row) => row.id,
        sortable: true,
      },
      {
        name: "Message Created",
        selector: (row) => row.message_created,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => <p className={`${row.status === 'Published' ? 'text-textBuyGreen bg-bgBuyGreen' : 'text-textPendingYellow bg-bgPendingYellow'}  px-3 py-1 rounded`}>{row.status}</p>,
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
      <ModuleHeader module={"Feedback"} subModule={"View Feedback"} />
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
              <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Add New</button>
              <button className="bg-white text-bgTopBtn rounded w-32 py-1 font-text border border-bgTopBtn ms-3">Filter</button>
            </div>
          </div>
        </div>

        {/* top header */}

        {/* table */}
        <div className="w-full">
          <Table data={viewFeedBack} columns={columns} customStyles={customStyles} />
        </div>
      </section>
    </div >
  )
};

