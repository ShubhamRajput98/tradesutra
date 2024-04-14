import { viewAllTips } from "../../../assets/jsonData/JsonData";
import { Table } from "../../common/Table/Table";
import { SearchIcon } from "../../common/icons/Icons";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";

// import svg images
import eyeaction from '../../../assets/svg/eyeaction.svg'
import editaction from '../../../assets/svg/editaction.svg'
import deleteaction from '../../../assets/svg/deleteaction.svg'
import infobutton from '../../../assets/svg/infobutton.svg'



import { useState } from "react";
import { TableModal } from "../../common/tableModal/TableModal";

export const ViewAllTips = () => {
  const [show, setShow] = useState('');



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
    checkbox: {
      style: {
        maxHeight: '118px',
        maxWidth: '118px',
        color: 'red'
      },
    },
  };

  const columns =
    [
      {
        name: "Tip ID",
        selector: (row) => row.tip_id,
        sortable: true,
      },
      {
        name: "Type",
        // selector: (row) => row.type,
        sortable: true,
        selector: (row) => <p className={`${row.type === 'Buy' ? 'text-textBuyGreen bg-bgBuyGreen' : 'text-textSellRed bg-bgSellRed'} px-3 py-1 rounded`}>{row.type}</p>
      },
      {
        name: "Stock Name",
        selector: (row) => row.stock_name,
        sortable: true,
      },
      {
        name: "Market Plan",
        selector: (row) => row.market_plan,
        sortable: true,
      },
      {
        name: "Market Type",
        selector: (row) => row.market_type,
        sortable: true,
      },
      {
        name: "Avg.Price",
        selector: (row) => row.avg_price,
        sortable: true,
      },
      {
        name: "Stop Loss",
        selector: (row) => row.stop_loss1,
        sortable: true,
      },
      {
        name: "Ref Level",
        selector: (row) => row.ref_level,
        sortable: true,
      },
      {
        name: "All Target",
        cell: (cells) => <div className="w-full flex justify-between items-center pe-6 relative">{cells.all_target} <img className="mt-1" src={infobutton} onClick={() => setShow(cells.all_target)} /> {show === cells.all_target && <TableModal value={cells.all_target} open={show === cells.all_target} setShow={setShow} />}</div>,
        sortable: true,
        width: "140px"
      },
      {
        name: "Stop Loss",
        cell: (cells) => <p className="w-full flex justify-between items-center pe-8">{cells.stop_loss2} <img className="mt-1" src={infobutton} onClick={() => setShow(cells.stop_loss2)} /> {show === cells.stop_loss2 && <TableModal value={cells.stop_loss2} open={show === cells.stop_loss2} setShow={setShow} />}</p>,
        sortable: true,
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
        name: "Status",
        cell: (cells) => <p className={`${cells.status === 'Open' ? 'text-textBuyGreen bg-bgBuyGreen' : 'text-textSellRed bg-bgSellRed'}  px-3 py-1 rounded`}>{cells.status}</p>,
        sortable: true,
      },
      {
        name: "Published",
        selector: (row) => row.published,
        sortable: true,
      },
      {
        name: "Analytics",
        selector: (row) => <div className="bg-bgTopBtn text-white rounded w-20 py-1 font-heading text-center leading-[20px]">Analytics</div>,
        sortable: true,
      },
      {
        name: "Actions",
        cell: (cells) => <div className="flex gap-2">
          <button onClick={() => console.log(cells)}>
            <img src={eyeaction} />
          </button>
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
      <ModuleHeader module={"Manage Tips"} subModule={"View All Tip"} />
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
          <Table data={viewAllTips} columns={columns} customStyles={customStyles} />
        </div>
      </section>
    </div >
  );
};
