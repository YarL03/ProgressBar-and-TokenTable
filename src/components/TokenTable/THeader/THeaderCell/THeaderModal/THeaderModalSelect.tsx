import { FC, useId, useState } from "react";
import { TokenTableFiltres } from "../../../../../shared/types/tokenTable.types";
import style from '../../../TokenTable.module.scss'

export const THeaderModalSelect: FC<{setFilter: (filter: TokenTableFiltres) => void, filters: TokenTableFiltres, setIsOpened: any, isOpened: boolean, refModal: any, refHeader: any, left: number}> = ({filters, setFilter, setIsOpened, refModal, isOpened, refHeader, left}) => {
    const [value, setValue] = useState(filters.status)
    const id = useId()

    
    return (
        <>
        {isOpened && refHeader.current && 
            <div className={style.modalSelect} onMouseLeave={() => {
                setIsOpened(false)
            }} ref={refModal} style={{position: 'absolute', top: '44px', left: left}}>
                <div className={style.modalSelectInner}>
                <div className={style.modalSelectInputsAndLabels}>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'green'}>green</label>
                        <input id={id + 'green'} onChange={(e) => {
                            setValue(e.currentTarget.value)
                            setFilter({...filters, status: e.currentTarget.value})
                    }} checked={value === 'green'} value='green' type='radio'/>
                    </div>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'yellow'}>yellow</label>
                        <input id={id + 'yellow'} onChange={(e) => {
                            setValue(e.currentTarget.value)
                            setFilter({...filters, status: e.currentTarget.value})
                    }} checked={value === 'yellow'} value='yellow' type='radio'/>
                    </div>
                    <div className={style.inputsLabels}>
                        <label htmlFor={id + 'red'}>red</label>
                        <input id={id + 'red'} onChange={(e) => {
                            setValue(e.currentTarget.value)
                            setFilter({...filters, status: e.currentTarget.value})
                    }} checked={value === 'red'} value='red' type='radio'/>
                    </div>
                </div>
                </div>
                <div className={style.modalSelectButton}>
                    <button onClick={() => {
                        setValue('')
                        setFilter({...filters, status: ''})
                    }}>Сброс</button>
                </div>
            </div>}
        </>
    )
}