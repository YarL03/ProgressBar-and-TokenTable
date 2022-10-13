export interface TokenTableItem {
    id: number,
    name: string,
    status: string,
    type: string,
    conditions: string,
    volume: number,
    roi: number,
    free: number,
    hedge: number
}

export type TTI = keyof TokenTableItem

export type SetFilter = (filters: TokenTableFiltres) => void

export type TokenTableFiltres = {status: string, type: string}

export type TokenTableSort = (items: Array<any>, sortBy: string) => Array<any>