import React from "react";
import {currencyFormatter} from "../../util/format";

interface ReportRowProps {
    name: string;
    amount: number;
}
export const ReportRow = (props: ReportRowProps) => {

    return (
        <div className={'report-row'}>
            <span>{props.name}</span>
            <span>{currencyFormatter.format(props.amount)}</span>
        </div>
    )
}