import React from "react";
import {CalculatorSettings} from "./Calculator";
import {Input} from "./Input";
import './Settings.scss';
import {Card} from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

interface SettingsProps {
    onChange: (settings: CalculatorSettings) => void
    settings: CalculatorSettings
}

export const Settings = (props: SettingsProps) => {
    const parseOrZero = (value: string): number => {
        const num = parseInt(value);
        if(Number.isNaN(num)) return 0;
        return num;
    }

    const updateHoursPerWeek = (hours: string) => {
        console.log('Handle in Settings')
        props.onChange({
            ...props.settings,
            hoursPerWeek: parseOrZero(hours)
        })
    }

    const updateHolidaysPerYear = (days: string) => {
        props.onChange({
            ...props.settings,
            holidaysPerYear: parseOrZero(days)
        })
    }

    const updateSickDaysPerYear = (days: string) => {
        props.onChange({
            ...props.settings,
            sickDaysPerYear: parseOrZero(days)
        })
    }

    const updateHourlyRate = (rate: string) => {
        props.onChange({
            ...props.settings,
            hourlyRate: parseOrZero(rate)
        })
    }

    const updateInsurance = (amount: string) => {
        props.onChange({
            ...props.settings,
            insuranceMonthly: parseOrZero(amount)
        })
    }

    const updateRetirement = (amount: string) => {
        props.onChange({
            ...props.settings,
            retirementMonthly: parseOrZero(amount)
        })
    }

    return (
        <div className={'settings'}>
            <Card>
                <h3><FontAwesomeIcon icon={faCog} /> Instellingen</h3>
                <Input name={'Uur/week'} id={'hoursPerWeek'} value={props.settings.hoursPerWeek} onChange={updateHoursPerWeek}/>
                <Input name={'Vakantiedagen/jaar'} id={'holidaysPerYear'} value={props.settings.holidaysPerYear} onChange={updateHolidaysPerYear}/>
                <Input name={'Ziektedagen/jaar'} id={'sickDaysPerYear'} value={props.settings.sickDaysPerYear} onChange={updateSickDaysPerYear}/>
                <Input name={'Uurtarief (ex. BTW)'}  id={'hourlyRate'} value={props.settings.hourlyRate} onChange={updateHourlyRate} prefix={'€'}/>
                <Input name={'Verzekeringen/mnd'}  id={'insuranceMonthly'} value={props.settings.insuranceMonthly} onChange={updateInsurance} prefix={'€'}/>
                <Input name={'Pensioen/mnd'}  id={'retirementMonthly'} value={props.settings.retirementMonthly} onChange={updateRetirement} prefix={'€'}/>
            </Card>
        </div>
    )
}