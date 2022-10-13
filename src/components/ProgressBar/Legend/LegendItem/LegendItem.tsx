import { FC } from "react"
import style from './LegendItem.module.scss'
import { ILegendItem } from "./legendItem.interface"
import { Circle } from "../../../../ui/Circle/Circle"

const LegendItem: FC<ILegendItem> = ({name, color, value, fraction}) => {
    console.log()
    return (
    <div className={style.legendItem}>
        <Circle color={color}/>
        <span className={style.text}>
            {
                `${name}:`
            }
        </span>
        <span className={style.text}>
            {
                `${value}`
            }
        </span>
        <span className={style.text}>
            {
                `(${fraction} %)`
            }
        </span>
    </div>
    )
}

export default LegendItem