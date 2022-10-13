import { FC, useState, useTransition } from "react";
import { TokenTableFiltres } from "../../../../../shared/types/tokenTable.types";
import style from '../../../TokenTable.module.scss'

export const THeaderModalSearch: FC<{setFilter: (filter: TokenTableFiltres) => void, filters: TokenTableFiltres, setIsOpened: any, isOpened: boolean, refModal: any, refHeader: any, left: number}> = ({setFilter, filters, setIsOpened, refModal, isOpened, refHeader, left}) => {
    const [isPending, startTransition] = useTransition()
    const [search, setSearch] = useState(filters.type)
    
    return (
        <>
        {isOpened && refHeader.current && 
            <div className={style.modalSearch} onMouseLeave={() => {
                setIsOpened(false)
            }} ref={refModal} style={{position: 'absolute', top: '44px', left: left}}>
                <div>
                        <input placeholder='Search type' onChange={(e) =>
                            startTransition(() => {
                                setSearch(e.currentTarget.value)
                                setFilter({...filters, type: e.currentTarget.value})
                            })
                        } value={search} type="text" />
                </div>
                <div className={style.modalSearchButton}>
                    <button onClick={() => {
                        setSearch('')
                        setFilter({...filters, type: ''})
                    }}>
                    Сброс
                    </button>
                </div>
            </div>}
        </>
    )
}