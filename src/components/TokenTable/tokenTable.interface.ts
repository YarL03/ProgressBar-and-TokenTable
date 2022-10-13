import { TokenTableSort } from './../../shared/types/tokenTable.types';
import { TokenTableFiltres, TokenTableItem } from '../../shared/types/tokenTable.types';



export interface ITokenTable {
    items: Array<TokenTableItem>
    filters: TokenTableFiltres
    onSort: TokenTableSort
    onBuy: (item: TokenTableItem) => void
    onFilter: () => any
    headerSorted?: string
}