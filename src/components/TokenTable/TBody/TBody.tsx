import { FC } from "react";
import { TokenTableFiltres, TokenTableItem } from "../../../shared/types/tokenTable.types";
import { tokenFilter } from "../../../utils/tokenFilter";
import { TBodyRow } from "./TBodyRow/TBodyRow";

interface ITBody {
    filters: TokenTableFiltres
    items: Array<TokenTableItem>
    onSort: (items: Array<TokenTableItem>, sortBy: string) => Array<TokenTableItem>
    sortBy: string | null
    onBuy: (item: TokenTableItem) => void
}

export const TBody: FC<ITBody> = ({onBuy, filters, items, onSort, sortBy}) => {
    const bodyRows: Array<TokenTableItem> = filters ? tokenFilter(filters, items) : items
    const sortedBodyRows: Array<TokenTableItem> = sortBy ? onSort(bodyRows, sortBy) : bodyRows

    return (
        <tbody>
            {sortedBodyRows.map(item => <TBodyRow onBuy={onBuy} item={item} key={item.id}/>)}
        </tbody>
    )
}