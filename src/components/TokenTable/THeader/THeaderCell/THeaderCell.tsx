import { FC, useId, useRef, useState } from "react";
import { TokenTableFiltres } from "../../../../shared/types/tokenTable.types";
import { existsInString } from "../../../../utils/existsInString";
import { getOffsetLeft } from "../../../../utils/getOffsetLeft";
import { getTagName } from "../../../../utils/getTagName";
import { THeaderModalSearch } from "./THeaderModal/THeaderModalSearch";
import { THeaderModalSelect } from "./THeaderModal/THeaderModalSelect";
import style from '../../TokenTable.module.scss'

export const THeaderCell: FC<{typeModal?: 'select' | 'search', filters?: TokenTableFiltres, sort?:string, columnName: string, value?: string, setFilter?: any, setSortBy?: any}> = ({typeModal, columnName, filters, setFilter, setSortBy, sort, value}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [left, setLeft] = useState(0)
    const refHeader = useRef(null)
    const refModal = useRef(null)
    
    const clickToSort = () => {
        if (value) setSortBy(existsInString(sort ?? '', '-') && sort ? sort?.slice(1) : 
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
                            <THeaderModalSelect setFilter={setFilter} filters={filters} setIsOpened={setIsOpened} refModal={refModal} refHeader={refHeader} left={left} isOpened={isOpened} />
                            : <THeaderModalSearch setFilter={setFilter} filters={filters} setIsOpened={setIsOpened} refModal={refModal} refHeader={refHeader} left={left} isOpened={isOpened}/>
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
/* при нажатии открывается модалка с фильтрами */

// export const THeaderCell  = (props) => {
//     const [isOpened, setIsOpened] = useState(false)
//     const [left, setLeft] = useState(0)
//     const ref = useRef(null)
    
    
    
//     return (
//         <>  {isOpened && ref.current && <td style={{verticalAlign: 'none', borderCollapse: 'collapse', display: 'block', position: 'absolute', top: '23px', left: left}}><td>123</td></td>}
//             {setSortBy ? <><th ref={ref} onClick={() => {
//                 if (value) setSortBy(existsInString(sort ?? '', '-') && sort ? sort?.slice(1) : 
//                 !existsInString(sort ?? '', '-') && sort ? '' 
//                 : `-${value}`)
//                 setIsOpened(!isOpened)
//                 setLeft(ref.current.offsetLeft + 20)
//             }}> 
//                 {columnName}
//             </th>
            
//             </>
//             : <th>
//                 {columnName}
//             </th>    
//         }
//         </>
//     )
// }

