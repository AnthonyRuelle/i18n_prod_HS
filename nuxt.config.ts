import { locales, defaultLocale } from './locales/config'

export default defineNuxtConfig({
    components: true,
    modules: [
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './locales/i18n.config.ts',
                // detectBrowserLanguage: {
                //     useCookie: true,
                //     cookieKey: 'i18n_redirected',
                //     alwaysRedirect: true,
                //     fallbackLocale: defaultLocale,
                //     cookieCrossOrigin: true,
                // },
                locales,
                defaultLocale,
                lazy: true,
                langDir: 'locales/',
            },
        ],
    ],
})
