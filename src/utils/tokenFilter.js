export const tokenFilter = (filters, arr) => filters.status && filters.type ? arr.filter(item => item.status === filters.status && item.type.toLowerCase() === filters.type.toLowerCase())
    : filters.status && !filters.type ? arr.filter(item => item.status === filters.status)
    : !filters.status && filters.type ? arr.filter(item => item.type.toLowerCase().indexOf(filters.type.toLowerCase()) !== -1 )
    : arr

// export const tokenFilter = (filters, arr) => filters.status && filters.type ? arr.filter(item => {
//     console.log(item.status, filters.status, item.type, filters.type)
//     return item.status === filters.status && item.type === filters.type
// })
//     : filters.status && !filters.type ? arr.filter(item => item.status === filters.status)
//     : arr.filter(item => item.type === filters.type)