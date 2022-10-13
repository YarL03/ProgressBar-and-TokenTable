import { FC, MutableRefObject, useState, useTransition, ChangeEvent } from "react";
import { TokenTableFiltres } from "../../../../../shared/types/tokenTable.types";
import style from '../../../TokenTable.module.scss'

interface ITHeaderModalSearch {
    setFilter: (filter: TokenTableFiltres) => void
    filters: TokenTableFiltres
    setIsOpened: (bool: boolean) => void
    isOpened: boolean
    refModal: MutableRefObject<any>
    refHeader: MutableRefObject<any>
    left: number
}

export const THeaderModalSearch: FC<ITHeaderModalSearch> = ({setFilter, filters, setIsOpened, refModal, isOpened, refHeader, left}) => {
    const [isPending, startTransition] = useTransition()
    const [search, setSearch] = useState(filters.type)

    const inputChange = (e: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
        setSearch(e.currentTarget.value)
        setFilter({...filters, type: e.currentTarget.value})
    })

    const buttonClick = () => {
        setSearch('')
        setFilter({...filters, type: ''})
    }
    
    return (
        <>
        {isOpened && refHeader.current && 
            <div className={style.modalSearch} onMouseLeave={() => setIsOpened(false)} 
            ref={refModal} style={{position: 'absolute', top: '44px', left: left}}>
                <div>
                        <input placeholder='Search type' onChange={inputChange} value={search} type="text" />
                </div>
                <div className={style.modalSearchButton}>
                    <button onClick={buttonClick}>
                    Сброс
                    </button>
                </div>
            </div>}
        </>
    )
}