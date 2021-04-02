import * as React from 'react';
import * as Klaro from 'klaro/dist/klaro-no-css';
import './style.css';

declare global {
  interface Window {
    klaro: any;
    klaroConfig: any;
  }
}

export interface TranslationModalType {
  [key: string]: {
    acceptAll: string,
    acceptSelected: string
    decline: string
    consentNotice: {
      description: string
      learnMore: string,
    },
    consentModal: {
      title: string
      description: string,
    },
    ok: string
    service: {
      disableAll: {
        description: string,
      },
    },
    purposes: {
      [key: string]: {
        title: string,
        description: string,
      },
    },
  },
}

export interface TranslationServiceType {
  [key: string]: {
    [key: string]: {
      title: string,
      description: string,
    },
  }
}

export type TranslationsProps = TranslationModalType | TranslationServiceType;

export interface AppProps {
  name: string
  title?: string
  description?: string
  purposes: string[],
  onAccept?: () => void;
  onInit?: () => void;
  onDecline?: () => void;
}

export interface UpCookieConsentProps {
  apps: AppProps[]
  privacyPolicyUrl: string
  translations?: TranslationsProps
  cookieName?: string,
  cookieExpiresAfterDays?: number,
}

const UpCookiesConsentManager : React.FunctionComponent<UpCookieConsentProps> = function ({ apps, privacyPolicyUrl, translations, cookieExpiresAfterDays = 120, cookieName = 'gdprConsent' })  {
  const defaultTranslations = {
    fr: {
      acceptAll: 'Tout accepter',
      acceptSelected: 'Accepter la sélection',
      decline: 'Tout refuser',
      consentNotice: {
        description: `Ce site utilise des cookies destinés à améliorer la navigation et adapter le contenu en mesurant le nombre de visites et de pages vues. <a target="_blank" href='${privacyPolicyUrl}' class='privacy-policy'>En savoir plus</a>`,
        learnMore: 'Personnaliser',
      },
      consentModal: {
        title: 'Panneau de gestion des cookies',
        description: 'En autorisant ces services tiers, vous acceptez le dépôt et la lecture de cookies et l’utilisation de technologies de suivi nécéssaires à leur bon fonctionnement.',
      },
      ok: 'Accepter',
      googleAnalytics: {
        title: 'Google Analytics',
        description: 'Ce service permet de recolter des données à des fins statistiques.',
      },
      purposes: {
        analytics: {
          title: 'Mesure d\'audience',
          description: 'Les services de mesure d\'audience permettent de générer des statistiques de fréquentation utiles à l\'amélioration du site.',
        },
      },
      service: {
        disableAll: {
          description: 'Utilisez ce switch pour activer/désactiver tous les services',
        },
      },
    },
  };

  const config = {
    lang: 'fr',
    elementID: 'up-consent',
    cookieName,
    cookieExpiresAfterDays,
    disablePoweredBy: true,
    htmlTexts: true,
    acceptAll: true,
    translations: translations || defaultTranslations,
    apps,
  };

  window.klaro = Klaro;
  window.klaroConfig = config;
  Klaro.setup(config);

  return null;
};

export default UpCookiesConsentManager;
