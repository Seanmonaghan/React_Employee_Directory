import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from "./columns"
import "../styles/table.css"
// import API from "../utils/API"


export const SortingTable = (props) => {

    console.log(props.data)

    const columns = useMemo(() => COLUMNS, [])
    const data = props.data

    const tableInstance = useTable({
        columns,
        data
    },
    useSortBy)

   

    const { getTableProps, footerGroups, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead> 
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        { column.isSorted ? ( column.isSortedDesc ? " ⬇️" : " ⬆️") : "" }
                                    </span>
                                </th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
               
            </tbody>
            {/* <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterGroupProps}>
                                        {
                                            column.render("Footer")
                                        }
                                    </td>
                                ))}
                        </tr>
                    ))}
            </tfoot> */}
        </table>
    )
}