const LocalStorageService = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
};

export default LocalStorageService;
