export const trimText = (str: string, num: number) => {
  if (!str) return "";
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
};
