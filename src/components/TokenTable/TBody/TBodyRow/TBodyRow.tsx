import { FC, useRef } from "react";
import { TokenTableItem } from "../../../../shared/types/tokenTable.types";
import { Circle } from "../../../../ui/Circle/Circle";
import style from '../../TokenTable.module.scss'

export const TBodyRow: FC<{item: TokenTableItem, onBuy: (item: TokenTableItem) => void}> = ({item, onBuy}) => {
    const ref = useRef(null)

    return ( 
        <tr data-status={item.status} className={style.tbodyTr} onClick={(e) => {
            if (e.target === ref.current) return
            window.history.pushState({}, '', `/project/${item.id}`)
        }}>
            <td className={style.tbodyTd}>
                <Circle styleObj={{marginRight: 5}} color={item.status}/>
                <td>{item.name}</td>
            </td>
            <td className={style.tbodyTd}>
                {item.type}
            </td>
            <td className={style.tbodyTd}>
                {item.conditions}
            </td>
            <td className={style.tbodyTd}>
                {item.volume.toLocaleString('en', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                })}
            </td>
            <td className={style.tbodyTd}>
                {`${item.roi} %`}
            </td>
            <td className={style.tbodyTd}>
                {item.free}
            </td>
            <td className={style.tbodyTd}>
            {`${item.hedge} %`}
            </td>
            <td className={style.tbodyTd}><button className={style.tbodyTrButton} onClick={(e) => {
                e.preventDefault()
                onBuy(item)
            }} ref={ref}>Buy</button></td>
        </tr>
    )
}