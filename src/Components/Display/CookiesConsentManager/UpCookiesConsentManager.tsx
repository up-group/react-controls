import React from 'react';
import * as Klaro from 'klaro/dist/klaro-no-css';
import './style.css';
import UpSvgIcon from '../SvgIcon';
import { CSSProperties, useState } from 'react';

declare global {
  interface Window {
    klaro: any;
    klaroConfig: any;
  }
}

export interface TranslationModalType {
  [key: string]: {
    acceptAll: string;
    acceptSelected: string;
    decline: string;
    consentNotice: {
      description: string;
      learnMore: string;
    };
    consentModal: {
      title: string;
      description: string;
    };
    ok: string;
    service: {
      disableAll: {
        description: string;
      };
    };
    purposes: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
}

export interface TranslationServiceType {
  [key: string]: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

export type TranslationsProps = TranslationModalType | TranslationServiceType;

export interface AppProps {
  name: string;
  title?: string;
  description?: string;
  purposes: string[];
  cookies?: [RegExp, string, string][];
  onAccept?: () => void;
  onInit?: () => void;
  onDecline?: () => void;
  default?: boolean;
  optOut?: boolean;
  required?: boolean;
}

export interface UpCookieConsentProps {
  apps: AppProps[];
  privacyPolicyUrl: string;
  translations?: TranslationsProps;
  cookieName?: string;
  cookieExpiresAfterDays?: number;
  editButtonStyle?: CSSProperties;
}

const UpCookiesConsentManager: React.FunctionComponent<UpCookieConsentProps> = function ({
  apps,
  privacyPolicyUrl,
  translations,
  cookieExpiresAfterDays = 120,
  cookieName = 'gdprConsent',
  editButtonStyle = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    border: 'none',
    background: 'none',
    padding: 14,
    borderRadius: '4px 0 0 0',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)',
    cursor: 'pointer',
    outline: 'none',
  },
}) {
  const [displayEditButton, setDisplayEditButton] = useState(false);

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
    callback: () => {
      setTimeout(() => {
        if (!document.querySelector('.cookie-notice') && !document.querySelector('.cookie-modal')) {
          setDisplayEditButton(true);
        }
      }, 0.1);
    },
  };

  window.klaro = Klaro;
  window.klaroConfig = config;
  Klaro.setup(config);

  return (
    <button
      style={{
        ...editButtonStyle,
        display: displayEditButton ? 'block' : 'none',
      }}
      onClick={() => Klaro.show()}
    >
      <UpSvgIcon iconName="settings" color="#F39219" width={20} height={20} />
    </button>
  );
};
export default UpCookiesConsentManager;
