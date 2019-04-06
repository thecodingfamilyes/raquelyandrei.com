import React from 'react';
import moment from 'moment';

export default function Item({ name, message, timestamp }) {
    return (
        <div>
            <div>Name: {name}</div>
            <div>Message: {message}</div>
            <div>{moment.unix(timestamp).format('LLL')}</div>
        </div>
    );
}
