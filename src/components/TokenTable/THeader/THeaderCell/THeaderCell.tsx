import { FC, useRef, useState } from "react";
import { SetFilter, TokenTableFiltres } from "../../../../shared/types/tokenTable.types";
import { existsInString } from "../../../../utils/existsInString";
import { getOffsetLeft } from "../../../../utils/getOffsetLeft";
import { getTagName } from "../../../../utils/getTagName";
import { THeaderModalSearch } from "./THeaderModal/THeaderModalSearch";
import { THeaderModalSelect } from "./THeaderModal/THeaderModalSelect";
import style from '../../TokenTable.module.scss'



interface ITHeaderCell {
    typeModal?: 'select' | 'search'
    filters?: TokenTableFiltres
    sort?:string, columnName: string
    value?: string
    setFilter?: SetFilter
    setSortBy?: (strSort: string) => void
}

export const THeaderCell: FC<ITHeaderCell> = ({typeModal, columnName, filters, setFilter, setSortBy, sort, value}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [left, setLeft] = useState(0)
    const refHeader = useRef(null)
    const refModal = useRef(null)
    
    const clickToSort = () => {
        if (value) setSortBy && setSortBy(existsInString(sort ?? '', '-') && sort ? sort?.slice(1) : 
        !existsInString(sort ?? '', '-') && sort ? '' 
        : `-${value}`)
    }

    const clickToFilter: (e: any) => void = (e) => {
        if (getTagName(e.target) === 'DIV' ||getTagName(e.target) === 'LABEL' || getTagName(e.target) === 'INPUT') 
            return
        
        setIsOpened(!isOpened)
        left !== getOffsetLeft(refHeader) && setLeft(getOffsetLeft(refHeader))
    }
    
    return (
                <>  
                    {setSortBy ? <>
                    
                    <th className={style.theadTh} >
                        <span onClick={clickToSort}>
                        {columnName}
                        </span>
                    </th>
                    
                    </>
                    : filters ? 
                    <th className={style.theadTh} ref={refHeader}>
                        <span onClick={clickToFilter}>
                        {columnName}
                        </span>
                        {   typeModal === 'select' ?
                            <THeaderModalSelect setFilter={setFilter as SetFilter} filters={filters} setIsOpened={setIsOpened} refModal={refModal} refHeader={refHeader} left={left} isOpened={isOpened} />
                            : <THeaderModalSearch setFilter={setFilter as SetFilter} filters={filters} setIsOpened={setIsOpened} refModal={refModal} refHeader={refHeader} left={left} isOpened={isOpened}/>
                        }
                    </th>

                    : <th className={style.theadTh}>
                        <span>
                        {columnName}
                        </span>
                    </th>    
                }
                </>
            )
}