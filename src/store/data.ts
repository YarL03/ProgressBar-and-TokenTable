import { TokenTableItem } from '../shared/types/tokenTable.types';
import { ProgressBarItem } from '../shared/types/progressBar.types';

export const itemsForProgressBar: Array<ProgressBarItem> = [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    {name: 'Burned', color: '#18e234', value: 202},
    {name: 'Sold', color: '#9ca4af', value: 323}
]

export const itemsForTokenTable: Array<TokenTableItem> = [
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
]