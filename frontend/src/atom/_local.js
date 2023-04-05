const localStorageEffect = key => ({setSelf}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  // onSet((newValue, _, isReset) => {
  //   isReset
  //     ? localStorage.removeItem(key)
  //     : localStorage.setItem(key, JSON.stringify(newValue));
  // });
};

export default localStorageEffect