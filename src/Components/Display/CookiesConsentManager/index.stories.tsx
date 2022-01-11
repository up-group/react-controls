import * as React from 'react';

import UpCookiesConsentManager from './';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import { TranslationsProps } from 'Components/Display/CookiesConsentManager/UpCookiesConsentManager';

export default {
  title: 'Components/Display/UpCookiesConsentManager',
  decorators: [withKnobs, getRootContainer('UpCookiesConsentManager')],
};

const translations: TranslationsProps = {
  fr: {
    acceptAll: 'Tout accepter',
    acceptSelected: 'Accepter la sélection',
    decline: 'Tout refuser',
    consentNotice: {
      description: `Ce site utilise des cookies destinés à améliorer la navigation et adapter le contenu en mesurant le nombre de visites et de pages vues. <a target="_blank" href='#' class='privacy-policy'>En savoir plus</a>`,
      learnMore: 'Personnaliser',
    },
    consentModal: {
      title: 'Panneau de gestion des cookies',
      description:
        'En autorisant ces services tiers, vous acceptez le dépôt et la lecture de cookies et l’utilisation de technologies de suivi nécéssaires à leur bon fonctionnement.',
    },
    ok: 'Accepter',
    googleAnalytics: {
      title: 'Google Analytics',
      description: 'Ce service permet de recolter des données à des fins statistiques.',
    },
    purposes: {
      analytics: {
        title: "Mesure d'audience",
        description:
          "Les services de mesure d'audience permettent de générer des statistiques de fréquentation utiles à l'amélioration du site.",
      },
    },
    service: {
      disableAll: {
        description: 'Utilisez ce switch pour activer/désactiver tous les services',
      },
    },
  },
};

const apps = [
  {
    name: 'googleAnalytics',
    purposes: ['analytics'],
    onAccept: () => console.log('accept'),
    onInit: () => console.log('init'),
    onDecline: () => console.log('decline'),
  },
];

const multipleApps = [
  {
    name: 'googleAnalytics',
    purposes: ['analytics'],
  },
  {
    name: 'twitter',
    purposes: ['marketing'],
  },
  {
    name: 'youtube',
    purposes: ['marketing'],
  },
];
export const Default = () => (
  <UpCookiesConsentManager
    apps={apps}
    privacyPolicyUrl="https://groupe.up.coop/fr/donnees-personnelles"
    translations={translations}
  />
);

export const MultipleServices = () => (
  <UpCookiesConsentManager apps={multipleApps} privacyPolicyUrl="https://groupe.up.coop/fr/donnees-personnelles" />
);
