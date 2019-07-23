// https://react.i18next.com/latest/using-with-hooks

import * as React from 'react';

import { Trans } from 'react-i18next';


export function SimpleTranslation() {
    return (
        <h1>
            <Trans i18nKey="description.part1">
                missing translation
            </Trans>
        </h1>
    );
}
