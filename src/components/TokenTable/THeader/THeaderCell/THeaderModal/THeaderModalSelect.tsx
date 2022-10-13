import { ChangeEvent, FC, MutableRefObject, useId, useState } from "react";
import { TokenTableFiltres } from "../../../../../shared/types/tokenTable.types";
import style from '../../../TokenTable.module.scss'

interface ITHeaderModalSelect {
    setFilter: (filter: TokenTableFiltres) => void
    filters: TokenTableFiltres
    setIsOpened: (bool: boolean) => void
    isOpened: boolean
    refModal: MutableRefObject<any>
    refHeader: MutableRefObject<any>
    left: number
}

export const THeaderModalSelect: FC<ITHeaderModalSelect> = ({filters, setFilter, setIsOpened, refModal, isOpened, refHeader, left}) => {
    const [value, setValue] = useState(filters.status)
    const id = useId()

    const inputSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setFilter({...filters, status: e.currentTarget.value})
    }

    const buttonClick = () => {
        setValue('')
        setFilter({...filters, status: ''})
    }

    
    return (
        <>
        {isOpened && refHeader.current && 
            <div className={style.modalSelect} onMouseLeave={() => setIsOpened(false)}
            ref={refModal} style={{position: 'absolute', top: '44px', left: left}}>
                <div className={style.modalSelectInner}>
                <div className={style.modalSelectInputsAndLabels}>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'green'}>green</label>
                        <input id={id + 'green'} onChange={inputSelect} 
                        checked={value === 'green'} value='green' type='radio'/>
                    </div>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'yellow'}>yellow</label>
                        <input id={id + 'yellow'} onChange={inputSelect} 
                        checked={value === 'yellow'} value='yellow' type='radio'/>
                    </div>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'red'}>red</label>
                        <input id={id + 'red'} onChange={inputSelect}
                        checked={value === 'red'} value='red' type='radio'/>
                    </div>
                </div>
                </div>
                <div className={style.modalSelectButton}>
                    <button onClick={buttonClick}>Сброс</button>
                </div>
            </div>}
        </>
    )
}