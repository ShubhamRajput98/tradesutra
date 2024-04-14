import React from 'react'
import DataTable from "react-data-table-component";

export const Table = ({ data, columns, customStyles }) => {

    return (
        <DataTable
            columns={columns}
            selectableRows
            data={data}
            onSelectedRowsChange={(e) => console.log(e)}
            pagination
            paginationComponentOptions
            paginationPerPage={[10]}
            paginationRowsPerPageOptions={[5, 10]}
            persistTableHead={true}
            highlightOnHover
            pointerOnHover
            fixedHeader
            customStyles={customStyles}
            selectableRowsHighlight
        />
    )
}
