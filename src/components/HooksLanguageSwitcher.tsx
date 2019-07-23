// https://react.i18next.com/latest/using-with-hooks

import * as React from 'react';

import { useTranslation } from 'react-i18next';


export function HooksLanguageSwitcher() {
    // const { t, i18n } = useTranslation('my-namespace');
    // const { t, i18n } = useTranslation('[my-namespace-a', 'my-namespace-a']);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <p>{t('cur-lng')} {i18n.language}</p>
            <button onClick={() => changeLanguage('he')}>{t('languages.he', 'HEBREW')}</button>
            <button onClick={() => changeLanguage('en')}>{t('languages.en', 'ENGLISH')}</button>
        </>
    );
}
