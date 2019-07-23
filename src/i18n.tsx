import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Cache from 'i18next-localstorage-cache';

i18n
    // .use(Cache) // https://www.i18next.com/overview/api
    // load translation using xhr -> see /public/locales
    // learn more: 
    //              https://www.i18next.com/how-to/add-or-load-translations
    //              https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more:
    //              https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        // fallbackLng: ['en', "es", "fr", "en-US", "dev"],        
        // preload: ['ja', 'en', 'zh'],
        debug: true, // logs to console all the information on i18next state.        
        // ns: 'translation',
        // defaultNS: 'translation',
        backend: {
            // for all available options read the backend's repository readme file
            // https://www.i18next.com/how-to/add-or-load-translations
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        cache: {
            // turn on or off
            enabled: true,

            // prefix for stored languages
            prefix: 'i18next_res_',

            // expiration ms
            expirationTime: 10 * 1000,

            // language versions
            versions: {}
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default',
            useSuspense: true,
        },
        // resources: {
        //     'en-US': {
        //         'translation': {
        //             title: "Welcome to react using react-i18next",
        //             description: {
        //                 part1: "part 1",
        //                 part2: "part 2"
        //             },
        //             languages: {
        //                 he: "Hebrew",
        //                 en: "English"
        //             }
        //         }
        //     },
        //     'he': {
        //         'translation': {
        //             title: "ברוך הבא לשמוש ב",
        //             description: {
        //                 part1: "חלק א",
        //                 part2: "חלק ב"
        //             },
        //             languages: {
        //                 he: "עברית",
        //                 en: "אנגלית"
        //             }

        //         }
        //     }

        // },
    }, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key'); // -> same as i18next.t
    });


export default i18n;