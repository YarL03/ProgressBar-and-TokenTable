import { FC } from "react";
import { ILegendItem } from "../Legend/LegendItem/legendItem.interface";
import { Fraction } from "./Fraction/Fraction";
import style from './Steps.module.scss'

interface ISteps {
    fractions: Array<ILegendItem>
    height: number
    width: number
}

const Steps: FC<ISteps> = ({height, width, fractions}) => {
    return (
        <div className={style.steps}>
            {fractions.map((item, id) => <Fraction height={height} width={width} key={id} color={item.color} fraction={item.fraction}/>)}
        </div>
    )
}

export default Steps