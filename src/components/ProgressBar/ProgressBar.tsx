import { FC, memo, useMemo } from "react"
import { evaluateFraction } from "../../utils/evaluateFraction"
import Legend from "./Legend/Legend"
import { ILegendItem } from "./Legend/LegendItem/legendItem.interface"
import { IProgressBar } from "./progressBar.interface"
import style from './ProgressBar.module.scss'
import Steps from "./Steps/Steps"

const ProgressBar: FC<IProgressBar> = memo(({items, height = 10, width = 5}) => {
    const total = useMemo(() => 
        items.reduce((prev, cur) => cur.value + prev, 0),
    [items])

    const fractions: Array<ILegendItem> = useMemo(() => items.map(item => ({...item, fraction: evaluateFraction(item.value, total)})),
    [items, total])

    return <div className={style.progressBar} style={{}}>
        <Steps height={height} width={width} fractions={fractions}/>
        <Legend items={fractions}/>
    </div>
})

export default ProgressBar