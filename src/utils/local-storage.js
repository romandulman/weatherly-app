export const lsConst = {
    WTHRLY_FAV_LIST: "WTHRLY_FAV_LIST",
    WTHRLY_FAV_KEYS: "WTHRLY_FAV_KEYS"
};

export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const isSavedPersist = key => {
  return localStorage.getItem(key) === null;
};

export const saveState = (state,key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    if (err === "QUOTA_EXCEEDED_ERR") {
      alert(
        "Browser Local Storage quota exceeded limit, the items will not save"
      );
    }
  }
};
