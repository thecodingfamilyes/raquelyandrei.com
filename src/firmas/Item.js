import React from 'react';
import { I18nContext } from '../i18n/I18nContext';
import TimeFromNow from '../components/TimeFromNow';
import Markdown from 'react-markdown';

export default function Item({ name, message, gravatar, created_at }) {
    return (
        <I18nContext.Consumer>
            {({ locale }) => {
                let lang = locale;

                if (locale == 'rom') {
                    lang = 'ro';
                }

                return (
                    <div className="flex text-left my-5">
                        <div className="mr-2">
                            <img
                                src={gravatar}
                                className="rounded-full border border-gray-500 bg-white "
                            />
                        </div>
                        <div className="flex-1">
                            <div className="mb-1 p-3 border-solid border border-gray-500">
                                <Markdown source={message} />
                            </div>
                            <div className="flex text-gray-700">
                                <div className="mr-2">{name}</div>
                                <div>
                                    <TimeFromNow
                                        locale={lang}
                                        time={created_at}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </I18nContext.Consumer>
    );
}
