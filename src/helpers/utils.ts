export const formatDateString = (date: string) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};

export const upperFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
