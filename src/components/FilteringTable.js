import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { GROUPED_COLUMNS } from "./columns"
import "../styles/table.css"
import {GlobalFilter} from "./GlobalFilter"


export const FilteringTable = (props) => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = props.data
    const tableInstance = useTable({
        columns,
        data,
        initialState: {pageIndex: 0}
    },
    useGlobalFilter,
    useSortBy,
    usePagination)

    const { 
        getTableProps,
        setPageSize,
        gotoPage,
        state,
        setGlobalFilter,
        getTableBodyProps, 
        canNextPage, 
        canPreviousPage, 
        headerGroups, 
        page, 
        nextPage, 
        previousPage, 
        pageOptions, 
        pageCount,
        prepareRow }
        = tableInstance

    const { globalFilter, pageSize, pageIndex } = state


    return (
        <>
        <GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
        <table {...getTableProps()}>
            <thead> 
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        { column.isSorted ? ( column.isSortedDesc ? <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png" alt="desc" /> : <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" alt="asc" />) : "" }
                                    </span>
                                </th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map( row=> {
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
        </table>
        <div className="pagination">
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go To Page: {' '} 
                <input type="number" defaultValue = {pageIndex + 1} onChange = {e => {
                    const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                    gotoPage(pageNumber)
                }} 
                style = {{ width: '50px'}}/>
            </span>
            <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))}>
                {
                    [10,25,50].map(pageSize => (
                        <option key = {pageSize} value = {pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>

            <button className = "btn btn-outline-secondary" onClick = {() => gotoPage(0)} disabled ={!canPreviousPage}>{'<<'}</button>
            <button className = "btn btn-outline-secondary" onClick = {() => previousPage()} disabled = {!canPreviousPage}>Previous</button>
            <button className = "btn btn-outline-secondary" onClick = {() => nextPage()} disabled = {!canNextPage}>Next</button>
            <button className = "btn btn-outline-secondary" onClick = {() => gotoPage(pageCount - 1)} disabled ={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}