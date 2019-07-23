// https://react.i18next.com/latest/using-with-hooks

import * as React from 'react';

import { useTranslation } from 'react-i18next';


export function HooksTranslation() {
    // const { t, i18n } = useTranslation('my-namespace');
    // const { t, i18n } = useTranslation('[my-namespace-a', 'my-namespace-a']);
    const { t /*, i18n */ } = useTranslation();

    return (
        <h1>{t('title')}</h1>
    );
}
