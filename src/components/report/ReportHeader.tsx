import React from "react";
import {currencyFormatter} from "../../util/format";

interface ReportHeaderProps {
    name: string;
    amount?: number;
}

export const ReportHeader = (props: ReportHeaderProps) => {

    const renderAmount = () => {
        if(props.amount) {
            return (
                <span>{currencyFormatter.format(props.amount)}</span>
            )
        }
    }

    return (
        <div className={'report-header'}>
            <span>{props.name}</span>
            {renderAmount()}
        </div>
    )
}