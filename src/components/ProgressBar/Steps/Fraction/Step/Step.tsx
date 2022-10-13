import { FC } from "react";
import { IStep } from "./step.interface";

export const Step: FC<IStep> = ({step}) => {
    return (
        <div style={{marginRight: '2px', borderRadius: '6px', height: `${step.height}px`, width: `${step.width}px`, background: step.color}}></div>
    )
}