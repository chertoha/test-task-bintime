export const createStorage = <T>(key: string) => {
  return {
    set: (data: T): void => {
      localStorage.setItem(key, JSON.stringify(data));
    },

    get: (): T => {
      const data = localStorage.getItem(key);
      return data && JSON.parse(data);
    },
  };
};
