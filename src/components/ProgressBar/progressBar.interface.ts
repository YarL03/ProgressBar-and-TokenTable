import { ProgressBarItem } from "../../shared/types/progressBar.types";

export interface IProgressBar {
    items: Array<ProgressBarItem>
    height?: number
    width?: number
}