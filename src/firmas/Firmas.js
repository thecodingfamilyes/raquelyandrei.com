import React from 'react';
import { useTranslation } from 'react-i18next';
import { H1 } from '../components/styled/Titles';
import Form from './Form';
import { connect } from 'react-refetch';
import List from './List';
import SignatureApi from '../data/Api/Signatures';

import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';

polyfill();

function Firmas({ fetchSignatures, addSignature, addedSignature }) {
    const { t } = useTranslation();

    let list = null;
    let addform = (
        <Form
            onSubmit={async data => {
                addSignature(data);
            }}
        />
    );
    let content = <p>{t('Cargando...')}</p>;

    if (fetchSignatures.fulfilled) {
        list = fetchSignatures.value;
    }

    if (addedSignature && addedSignature.fulfilled) {
        list = [addedSignature.value, ...list];
        addform = null;
    }

    if (list) {
        content = <List items={list} />;
    }

    return (
        <div>
            <H1 className="font-cursive text-3xl">{t('Libro de firmas')}</H1>
            {addform}
            {content}
        </div>
    );
}

export default connect(props => SignatureApi(props))(Firmas);
