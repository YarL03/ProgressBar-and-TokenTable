import { TokenTableSort } from './../shared/types/tokenTable.types';
import { existsInString } from './existsInString';


export const onSort: TokenTableSort = (items, sortBy) => [...items].sort((a, b) => (existsInString(sortBy, '-')) ? b[sortBy.slice(1)] - a[sortBy.slice(1)] : a[sortBy]-b[sortBy]) 