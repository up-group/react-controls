import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import withTheme from '../../../Common/theming/withTheme';
import { colors } from '../../../Common/theming/colorMap';
import UpBox from '../Box';
import UpButton from '../../Inputs/Button';

export interface UpCookiesConsentProps {
  cookieKey: string;
  cookieValue: string;
  cookiesConsentMessage: string;
  closeButtonLabel: string;
  children?: Array<ReactNode> | ReactNode;
  knowMoreLabel?: string;
  moreDetailsPage?: string;
}

function setCookie(name: string, value: string, days?: number) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const UpCookiesConsent: React.FunctionComponent<UpCookiesConsentProps> = props => {
  const { children, cookieKey, cookieValue, moreDetailsPage, closeButtonLabel, cookiesConsentMessage, knowMoreLabel } =
    props;
  const [cookiesNotAllowed, setCookiesNotAllowed] = useState<boolean>(false);

  const updateCookies = () => {
    if (!getCookie(cookieKey) || getCookie(cookieKey) !== cookieValue) {
      setCookiesNotAllowed(true);
    }
  };

  useEffect(() => {
    updateCookies();
  });

  return (
    <UpBox
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh)',
        width: '100%',
      }}
    >
      <UpBox
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{
          height: cookiesNotAllowed ? 80 : 0,
          transform: cookiesNotAllowed ? 'scaleY(1)' : 'scaleY(0)',
          width: '100%',
          backgroundColor: '#424C4A',
          paddingRight: 50,
          paddingLeft: 50,
          transition: 'height 0.5s, transform 0.5s',
        }}
      >
        <span
          style={{
            marginRight: 100,
            color: colors.white,
            fontFamily: 'Roboto',
            fontSize: '14px',
            lineHeight: '16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>{cookiesConsentMessage}</span>
          {moreDetailsPage && (
            <span
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={() => window.open(moreDetailsPage, '_blank')}
            >
              {knowMoreLabel}
            </span>
          )}
        </span>
        <UpButton
          width={'normal'}
          intent={'primary'}
          onClick={() => {
            setCookiesNotAllowed(false);
            setCookie(cookieKey, cookieValue);
          }}
        >
          {closeButtonLabel}
        </UpButton>
      </UpBox>
      {children}
    </UpBox>
  );
};

export { UpCookiesConsent };
export default withTheme<UpCookiesConsentProps>(UpCookiesConsent);
