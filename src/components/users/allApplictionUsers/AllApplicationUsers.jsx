import { allApplicationusers } from "../../../assets/jsonData/JsonData";
import { SearchIcon } from "../../common/icons/Icons";
import { ModuleHeader } from "../../common/moduleHeader/ModuleHeader";
import { Table } from "../../common/Table/Table";
import { Stars } from "../../common/stars/Stars";


// import svg images
import editaction from '../../../assets/svg/editaction.svg'
import deleteaction from '../../../assets/svg/deleteaction.svg'

export const AllApplicationUsers = () => {

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
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
                paddingTop: "12px",
                paddingBottom: "12px",
                color: "#566a7f",
                width: "150px",
            },
        },
    };


    const columns =
        [
            {
                name: "User ID",
                selector: (row) => row.user_id,
                sortable: true,
            },
            {
                name: "Unique Code",
                selector: (row) => row.unique_code,
                sortable: true,
            },
            {
                name: "Device Token",
                selector: (row) => row.device_token,
                sortable: true,
            },
            {
                name: "User Name",
                selector: (row) => row.user_name,
                sortable: true,
            },
            {
                name: "Phone No",
                selector: (row) => row.phone_no,
                sortable: true,
            },
            {
                name: "Device Type",
                selector: (row) => row.device_type,
                sortable: true,
            },
            {
                name: "Membership Start",
                selector: (row) => row.membership_start,
                sortable: true,
            },
            {
                name: "Time",
                selector: (row) => row.time,
                sortable: true,
            },
            {
                name: "Market Type",
                selector: (row) => row.market_type,
                sortable: true,
            },
            {
                name: "Rating",
                cell: (cells) => <Stars rating={cells.rating} />,
                sortable: true,
            },
            {
                name: "Total Click",
                selector: (row) => row.total_click,
                sortable: true,
            },
            {
                name: "User Status",
                selector: (row) => row.user_status,
                sortable: true,
            },
            {
                name: "notification",
                selector: (row) => row.notification,
                sortable: true,
            },
            {
                name: "rewards",
                selector: (row) => row.rewards,
                sortable: true,
            },
            {
                name: "Last Login",
                selector: (row) => row.last_login,
                sortable: true,
            },
            {
                name: "status",
                selector: (row) => row.status,
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
            <ModuleHeader module={"Users"} subModule={"All Application Users"} />
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
                            <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Block</button>
                            <button className="bg-bgTopBtn text-white rounded w-32 py-1 font-text">Unblock</button>
                            <button className="bg-white text-bgTopBtn rounded w-32 py-1 font-text border border-bgTopBtn ms-3">Filter</button>
                        </div>
                    </div>
                </div>

                {/* top header */}

                {/* table */}
                <div className="w-full">
                    <Table data={allApplicationusers} columns={columns} customStyles={customStyles} />
                </div>
            </section>
        </div >
    )
}
