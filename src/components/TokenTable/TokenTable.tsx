import { FC, useEffect, useState } from "react";
import style from './TokenTable.module.scss'
import { TBody } from "./TBody/TBody";
import { THeader } from "./THeader/THeader";
import { ITokenTable } from "./tokenTable.interface";

const TokenTable: FC<ITokenTable> = ({items, filters, onSort, onBuy, onFilter, headerSorted = ''}) => {
    const [sortBy, setSortBy] = useState(headerSorted ?? null)
    const [currentFilters, setCurrentFilters] = useState(filters)

    useEffect(() => {
        setSortBy(headerSorted)
    }, [headerSorted])

    return (
        <div >
            Table
            <div className={style.tableContainer}>
                <table className={style.tokenTable}>
                    <THeader sort={sortBy} filters={currentFilters} setCurrentFilters={setCurrentFilters} setSortBy={setSortBy}/>
                    <TBody onBuy={onBuy} onSort={onSort} filters={currentFilters} sortBy={sortBy} items={items}/>
                </table>
            </div>
        </div>
    )
}

export default TokenTable