import React, { useState } from "react";
import moment from "moment";
import useInterval from "../hooks/useInterval";
import { useTranslation } from "react-i18next";

const weddingDate = moment("2019-10-05 11:30:00");

const calculateDiff = date => moment.duration(date.diff(moment()));

const startDiff = calculateDiff(weddingDate);

function DiffItem({ value, name }) {
  if (value <= 0) {
    return null;
  }

  return (
    <div className="text-center mx-2">
      <div className="text-red-600 font-bold text-4xl">{value}</div>
      <div>{name}</div>
    </div>
  );
}

export default function Countdown({ locale }) {
  const { t } = useTranslation();
  moment.locale([locale, "es"]);

  let [diff, setDiff] = useState(startDiff);

  useInterval(() => {
    // Your custom logic here
    setDiff(calculateDiff(weddingDate));
  }, 1000);

  return (
    <div className="flex items-center content-center justify-center">
      <DiffItem value={diff.months()} name={t("meses")} />
      <DiffItem value={diff.days()} name={t("días")} />
      <DiffItem value={diff.hours()} name={t("horas")} />
      <DiffItem value={diff.minutes()} name={t("minutos")} />
      <DiffItem value={diff.seconds()} name={t("segundos")} />
    </div>
  );
}
