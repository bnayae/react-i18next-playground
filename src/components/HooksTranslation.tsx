// https://react.i18next.com/latest/using-with-hooks

import * as React from 'react';

import { useTranslation } from 'react-i18next';


export function HooksTranslation() {
    // const { t, i18n } = useTranslation('my-namespace');
    // const { t, i18n } = useTranslation('[my-namespace-a', 'my-namespace-a']);
    const { t /*, i18n */ } = useTranslation();

    return (
        <>
            <h1>Hooks</h1>
            <p dangerouslySetInnerHTML={{ __html: t('title', { item: "React i18n" }) }} />
            <p dangerouslySetInnerHTML={{ __html: t('hi', { name: "<b>bnaya</b>" }) }} />
            <h4>{t('description.part1')}</h4>
            <h5>{t('description.part2')}</h5>
        </>
    );
}
