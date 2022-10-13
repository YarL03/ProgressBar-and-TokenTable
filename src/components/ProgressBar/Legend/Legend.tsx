import { FC } from "react"
import { ILegend } from "./legend.interface"
import style from './Legend.module.scss'
import LegendItem from "./LegendItem/LegendItem"

const Legend: FC<ILegend> = ({items}) => {
    return (
    <div className={style.legend}>
        {items.map((item, id) => <LegendItem key={id} fraction={item.fraction || 0} color={item.color} name={item.name} value={item.value}/>)}
    </div>
    )
}

export default Legend