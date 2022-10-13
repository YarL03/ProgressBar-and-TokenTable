import { FC, memo } from "react";
import { SetFilter, TokenTableFiltres } from "../../../shared/types/tokenTable.types";
import { THeaderCell } from "./THeaderCell/THeaderCell";

interface ITHeader {
    setCurrentFilters: SetFilter
    sort: string 
    filters: TokenTableFiltres
    setSortBy: (strSort: string) => void
}

export const THeader: FC<ITHeader> = memo(({setCurrentFilters, filters, setSortBy, sort}) => {

    return (
        <thead>
            <tr style={{position: 'relative'}}>
                <THeaderCell typeModal='select' filters={filters} setFilter={setCurrentFilters} columnName="Project"/> 
                <THeaderCell typeModal='search' filters={filters} setFilter={setCurrentFilters} columnName="Token type"/> 
                <THeaderCell columnName="Conditions"/> 
                <THeaderCell setSortBy={setSortBy} sort={sort} value='volume' columnName="Volume"/> 
                <THeaderCell setSortBy={setSortBy} sort={sort} value='roi' columnName="ROI"/> 
                <THeaderCell setSortBy={setSortBy} sort={sort} value='free' columnName="Free float"/> 
                <THeaderCell setSortBy={setSortBy} sort={sort} value='hedge' columnName="Insurance hedge"/> 
                <THeaderCell columnName=""/> 
            </tr>
        </thead>
    )
})