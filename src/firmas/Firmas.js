import React from 'react';
import { useTranslation } from 'react-i18next';
import { H1 } from '../components/styled/Titles';
import Form from './Form';
import List from './List';
import moment from 'moment';

export default function Firmas() {
    const { t } = useTranslation();

    return (
        <div>
            <H1 className="font-cursive text-3xl">{t('Libro de firmas')}</H1>
            <Form />
            <List
                items={[
                    {
                        name: 'User',
                        message: 'Hello world!',
                        timestamp: moment().unix(),
                    },
                ]}
            />
        </div>
    );
}
