import { FC, useMemo } from "react";
import { Step } from "./Step/Step";

export const Fraction: FC<{color: string, fraction: number, height: number, width: number}> = ({width, height, color, fraction}) => {
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