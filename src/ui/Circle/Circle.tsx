import { FC } from "react";
import style from './Circle.module.scss'

export const Circle: FC<{color: string, styleObj?: any}> = ({color, styleObj}) => {
    return <span style={{background: color, ...styleObj}} className={style.circle}></span>
}