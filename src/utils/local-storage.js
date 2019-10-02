export const lsConst = {
    WTHRLY: "WTHRLY",
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(lsConst.WTHRLY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const isSavedPersist = () => {
    return localStorage.getItem(lsConst.WTHRLY) === null;
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(lsConst.WTHRLY, serializedState);
    } catch (err) {
        if (err === "QUOTA_EXCEEDED_ERR") {
            alert('Browser Local Storage quota exceeded limit, the items will not save')
        }
    }
};
