import React from "react"
import "../styles/globalFilter.css"

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div id = "globalFilter">
            <span>
                Search: {"   "}
                <input value = {filter || ""}
                onChange = {e => setFilter(e.target.value)} />
            </span>
        </div>
    )
}