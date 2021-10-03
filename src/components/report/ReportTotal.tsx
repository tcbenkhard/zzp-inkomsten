import React from "react";
import {currencyFormatter} from "../../util/format";

interface ReportTotalProps {
    amount: number;
}
export const ReportTotal = (props: ReportTotalProps) => {
    return (
        <div className={'report-total'}>
            <span>&nbsp;</span>
            <span className={'report-total-sum'}>Totaal: {currencyFormatter.format(props.amount)}</span>
        </div>
    )
}