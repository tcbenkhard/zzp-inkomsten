import React, {useEffect, useState} from "react";
import './Calculator.scss';
import {Settings} from "./Settings";
import {Report} from "./report/Report";

export interface CalculatorSettings {
    hoursPerWeek: number;
    holidaysPerYear: number;
    sickDaysPerYear: number;
    hourlyRate: number;
    retirementMonthly: number;
    insuranceMonthly: number;
}

export interface Calculation {
    taxableIncome: number;
    yearlyProfit: number;
    startersDeduction: number;
    freelanceDeduction: number;
    mkbDeduction: number;
    insuranceDeductable: number;
    retirementDeductable: number;
    totalDeduction: number;
    box1Taxes: number;
    box2Taxes: number
    totalIncomeTaxes: number;
    zvwTaxes: number;
    grossProfit: number;
    monthly: number;
}

export const Calculator = () => {
    const [settings, setSettings] = useState<CalculatorSettings>({
        hoursPerWeek: 40,
        holidaysPerYear: 30,
        sickDaysPerYear: 5,
        hourlyRate: 50,
        insuranceMonthly: 200,
        retirementMonthly: 500,
    });

    const [calculation, setCalculation] = useState<Calculation>();

    useEffect(() => {
        calculate();
    }, [])

    useEffect(() => {
        calculate();
    }, [settings]);

    const calculate = () => {
        const minimumHours = 1225;
        const startersDeduction = 2123;
        const freelanceDeduction = 6670;
        const mkbDiscountPercentage = 0.14;
        const zvwPercentage = 0.0575;
        const zvwMax = 58311;

        console.log({
            ...settings
        })
        const yearlyHours = (settings.hoursPerWeek * 52 - (settings.holidaysPerYear * 8) - (settings.sickDaysPerYear * 8));
        const yearlyProfit = yearlyHours * settings.hourlyRate;

        const receivedFreelanceDeduction = yearlyHours >= minimumHours ? freelanceDeduction : 0

        const mkbDeduction = (yearlyProfit - startersDeduction - receivedFreelanceDeduction) * mkbDiscountPercentage;
        const insuranceDeductable = settings.insuranceMonthly * 12;
        const retirementDeductable = settings.retirementMonthly * 12;
        const totalDeduction = startersDeduction + receivedFreelanceDeduction + mkbDeduction + insuranceDeductable + retirementDeductable;

        const taxableIncome = yearlyProfit - totalDeduction;
        const [box1Taxes, box2Taxes] = calculateIncomeTaxes(taxableIncome);
        const totalIncomeTaxes = box1Taxes + box2Taxes;
        const zvwTaxes = taxableIncome >= zvwMax ? zvwPercentage * zvwMax : zvwPercentage * taxableIncome;

        const grossProfit = yearlyProfit - totalIncomeTaxes - insuranceDeductable - retirementDeductable - zvwTaxes;
        const monthly = grossProfit / 12;

        setCalculation({
            yearlyProfit,
            startersDeduction,
            freelanceDeduction: receivedFreelanceDeduction,
            mkbDeduction,
            insuranceDeductable,
            retirementDeductable,
            totalDeduction,
            taxableIncome,
            box1Taxes,
            box2Taxes,
            totalIncomeTaxes,
            zvwTaxes,
            grossProfit,
            monthly
        })
    }

    const calculateIncomeTaxes = (taxableIncome: number) => {
        const box1Size = 68508;
        const box1Tax = 0.371;
        const box2Tax = 0.495;
        const box1Taxable = taxableIncome >= box1Size ? box1Size : taxableIncome;
        const box2Taxable = taxableIncome > box1Size ? taxableIncome - box1Size : 0;
        return [
            box1Taxable * box1Tax,
            box2Taxable * box2Tax
        ]
    }

    const updateSettings = (settings: CalculatorSettings) => {
        setSettings(settings);
    }

    const renderReport = () => {
        if(calculation) {
            return (<Report calculation={calculation} />);
        }
    }

    return (
        <div className={'calculator'}>
            <Settings onChange={updateSettings} settings={settings}/>
            {renderReport()}
        </div>
    )
}