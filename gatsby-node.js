const fs = require('fs');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const localesNSContent = {
    en: [
        {
            content: fs.readFileSync('src/locales/es/messages.json', 'utf8'),
            ns: 'messages',
        },
    ],
    rom: [
        {
            content: fs.readFileSync('src/locales/rom/messages.json', 'utf8'),
            ns: 'messages',
        },
    ],
};

const availableLocales = [
    { value: 'es', text: 'Español' },
    { value: 'rom', text: 'Românesc' },
];

// default locales don't end up in a specific locale route i.e example.com for english and example.com/fr for franch
const defaultLocales = { value: 'es', text: 'Español' };

exports.onCreatePage = async props => {
    const {
        page,
        actions: { createPage, deletePage, createRedirect },
    } = props;

    if (/^\/dev-404-page\/?$/.test(page.path)) {
        return;
    }

    deletePage(page);

    availableLocales.map(({ value }) => {
        let newPath = `/${value}${page.path}`;
        if (defaultLocales.value === value) {
            newPath = page.path;
        }

        const localePage = {
            ...page,
            originalPath: page.path,
            path: newPath,
            context: {
                availableLocales,
                locale: value,
                routed: true,
                data: localesNSContent[value],
                originalPath: page.path,
            },
        };
        createPage(localePage);
    });
};
