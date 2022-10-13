import { FC, useMemo } from "react";
import { Step } from "./Step/Step";

interface IFraction {
    color: string
    fraction: number
    height: number
    width: number
}

export const Fraction: FC<IFraction> = ({width, height, color, fraction}) => {
    const stepsArr = useMemo(() => {
        
        const arr = []
        for (let i = 0; i < fraction; i++) {
            arr.push({color, height, width})
        }
        return arr
    }, [fraction, color, height, width])

    return (
        <>
        {stepsArr.map((step, id) => <Step key={id + step.color} step={step}/>)}
        </>
    )
}