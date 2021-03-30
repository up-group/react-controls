import * as React from 'react';

import { UpCookiesConsentProps, UpCookiesConsent } from './UpCookiesConsent';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Components/Containers/UpCookiesConsent',
  decorators : [withKnobs, getRootContainer('UpCookiesConsent')],
};

export const General =
  () => (
    <UpCookiesConsent
      cookieKey="acceptCookies"
      cookieValue="authorised"
      closeButtonLabel="Accepter"
      cookiesConsentMessage="Des cookies strictement nécessaires à la délivrance du service peuvent être installés lors de votre navigation sur ce site. Nous n'utilisons pas de cookies publicitaires ou à des fins marketing."
    >
      <div>
        <p>Content</p>
      </div>
    </UpCookiesConsent>
  );

export const WithKnowMore =
  () => (
    <UpCookiesConsent
      cookieKey="acceptCookies"
      cookieValue="authorised"
      closeButtonLabel="Accepter"
      cookiesConsentMessage="Des cookies strictement nécessaires à la délivrance du service peuvent être installés lors de votre navigation sur ce site. Nous n'utilisons pas de cookies publicitaires ou à des fins marketing."
      moreDetailsPage="https://groupe.up.coop/fr/donnees-personnelles"
      knowMoreLabel="En savoir plus"
    >
      <div>
        <p>Content</p>
      </div>
    </UpCookiesConsent>
  );
