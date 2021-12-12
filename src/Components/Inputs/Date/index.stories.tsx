import React from 'react';
import UpDate, { UpDate as UpDateComponent } from './UpDate';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment  from 'moment';

export default {
    title: 'Components/Inputs/UpDate',
    decorators: [
        withKnobs,
        getRootContainer('UpDate'),
        (UpDate) => (
            <div style={{ height: "425px" }}>
                <UpDate />
            </div>
        )
    ],
    component: UpDateComponent
};

const DateForm = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <UpDate
                name={"startDate"}
                floatingLabel={"Date de début"}
                value={values.startDate}
                isRequired={true}
                onChange={handleChange}
                maxDate={values.endDate}
            />
            <UpDate
                name={"endDate"}
                floatingLabel={"Date de fin"}
                value={values.endDate}
                isRequired={true}
                onChange={handleChange}
                minDate={values.startDate}
            />
        </form>
    );
};

export const General =
    () => {
        const [value, setDate] = React.useState(moment() as any);

        return (
            <UpDate
                dataTestId={"UpDate"}
                onChange={(event, value) => {
                    console.log(event);
                    console.log(value);
                    setDate(value)
                }}
            />
        )
    };

export const DateOnlyAfterToday =
    () => {
        const [value, setDate] = React.useState(moment() as any);

        return (
            <UpDate
                onChange={(event, value) => {
                    console.log(event);
                    console.log(value);
                    setDate(value)
                }}
                minDate={new Date()}
                value={value && moment(value)}
            />
        )
    };

export const DateOnlyBeforeToday =
    () => {
        const [value, setDate] = React.useState(moment() as any);

        return (
            <UpDate
                onChange={(event, value) => {
                    console.log(event);
                    console.log(value);
                    setDate(value)
                }}
                maxDate={new Date()}
                value={value && moment(value)}
            />
        )
    };

export const DateInFullWidth =
    () => {
        const [value, setDate] = React.useState(moment() as any);

        return (
            <UpDate
                onChange={(event, value) => {
                    console.log(event);
                    console.log(value);
                    setDate(value)
                }}
                fullWidth
                value={value && moment(value)}
            />
        )
    };

export const OnlySomeDate =
    () => {
        const [value, setDate] = React.useState(moment() as any);

        return (
            <UpDate
                onChange={(event, value) => {
                    console.log(event);
                    console.log(value);
                    setDate(value)
                }}
                isOutsideRange={(day: moment.Moment) => {
                    return day.toDate().getDate() % 2 > 0
                }}
                value={value && moment(value)}
            />
        )
    };

export const MonthsAndYearsSelectable =
    () => (
        <UpDate
            numberOfMonths={1}
            onChange={(value, event) => {
                console.log(event);
                console.log(value);
            }}
            daySize={40}
        />
    );

export const IsRequired =
    () => (
        <UpDate
            isRequired={true}
            onChange={(value, event) => {
                console.log(event);
                console.log(value);
            }}
        />
    );

export const IntegrationInForm =
    () => (
        <Formik
            initialValues={{ startDate: null, endDate: null }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
            })}
        >
            {props => <DateForm {...props} />}
        </Formik>
    );