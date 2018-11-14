import * as React from 'react';

interface CurrencyProps {
  locale?: string;
  currency?: string;
  showSymbol?: boolean;
  value: number;
}

export const toCurrencyString = (
  value: number,
  locale: string = 'fr-FR',
  currency: string = 'EUR',
  showSymbol: boolean = false,
) => {
  const digits = Number.isInteger(value) ? 0 : 2;
  return value != null ? value.toLocaleString(locale, { currency, minimumFractionDigits: digits }) : '';
};

const Currency: React.SFC<CurrencyProps> = (props) => {
  const { locale, currency, showSymbol, value } = props;
  return <>{toCurrencyString(value, locale, currency, showSymbol)}</>;
};

Currency.defaultProps = {
  locale: 'fr-FR',
  currency: 'EUR',
  showSymbol: false,
  value: 0,
};

export default Currency;
