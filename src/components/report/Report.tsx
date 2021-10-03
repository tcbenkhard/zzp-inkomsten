import React from "react";
import {Calculation} from "../Calculator";
import {Card} from "../Card";
import './Report.scss'
import {ReportHeader} from "./ReportHeader";
import {ReportRow} from "./ReportRow";
import { ReportTotal } from "./ReportTotal";

interface ReportProps {
    calculation: Calculation
}

export const Report = (props: ReportProps) => {
    return (
        <div className={'report'}>
            <Card>
                <ReportHeader name={'Jaaromzet'} amount={props.calculation.yearlyProfit}/>

                <ReportHeader name={'Aftrekposten'} />
                <ReportRow name={'Startersaftrek'} amount={props.calculation.startersDeduction} />
                <ReportRow name={'Zelfstandigenaftrek'} amount={props.calculation.freelanceDeduction} />
                <ReportRow name={'MKB Korting'} amount={props.calculation.mkbDeduction} />
                <ReportRow name={'Verzekeringen'} amount={props.calculation.insuranceDeductable} />
                <ReportRow name={'Pensioen'} amount={props.calculation.retirementDeductable} />
                <ReportTotal amount={props.calculation.totalDeduction}/>

                <ReportHeader name={'Belastbaar inkomen'} />
                <ReportRow name={'Jaaromzet'} amount={props.calculation.yearlyProfit}/>
                <ReportRow name={'Aftrekposten'} amount={props.calculation.totalDeduction}/>
                <ReportTotal amount={props.calculation.taxableIncome}/>

                <ReportHeader name={'Inkomstenbelasting'} />
                <ReportRow name={'Box 1'} amount={props.calculation.box1Taxes}/>
                <ReportRow name={'Box 2'} amount={props.calculation.box2Taxes}/>
                <ReportTotal amount={props.calculation.totalIncomeTaxes}/>

                <ReportHeader name={'Netto inkomen'} />
                <ReportRow name={'Jaaromzet'} amount={props.calculation.yearlyProfit}/>
                <ReportRow name={'Inkomstenbelasting'} amount={props.calculation.totalIncomeTaxes}/>
                <ReportRow name={'Premie volksverzekering'} amount={props.calculation.zvwTaxes}/>
                <ReportRow name={'Verzekeringen'} amount={props.calculation.insuranceDeductable}/>
                <ReportRow name={'Pensioen'} amount={props.calculation.retirementDeductable}/>
                <ReportTotal amount={props.calculation.grossProfit}/>

                <ReportHeader name={'Netto maandelijks'} amount={props.calculation.monthly}/>
            </Card>
        </div>
    )
}