import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/ro';

export default function TimeFromNow({ locale, time }) {
    moment.locale(locale);
    const baseTime = moment(time);

    const [timefromNow, setTimeFromNow] = useState(baseTime.fromNow());

    setInterval(() => {
        setTimeFromNow(baseTime.fromNow());
    }, 60000);

    return <>{timefromNow}</>;
}
