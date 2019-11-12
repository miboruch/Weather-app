export const getLocationTime = timezone => {
  const cityTimezone = timezone / 3600;
  const date = new Date();
  const currentTimezone = date.getTimezoneOffset() / 60;
  date.setHours(date.getHours() + (cityTimezone + currentTimezone));

  return date;
};

export const getForecastTime = (timezone, dateTxt) => {
  const cityTimezone = timezone / 3600;
  const date = new Date(dateTxt);
  const currentTimezone = date.getTimezoneOffset() / 60;
  date.setHours(date.getHours() + (cityTimezone + currentTimezone));

  return {
    fullDate: date,
    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: date.toLocaleDateString()
  };
};
