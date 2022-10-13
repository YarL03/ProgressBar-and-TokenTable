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

export type TokenTableFiltres = {status: string, type: string}

// export type TokenTableSort = (items: Array<TokenTableItem>, sortBy: string) => Array<TokenTableItem>

export type TokenTableSort = (items: Array<any>, sortBy: string) => Array<any>

export type TokenTableHeader = 'Project' | 'Token type' | 'Conditions' | 'Volume' | 'ROI' | 'Free float' | 'Insurance hedge'