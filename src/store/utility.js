export const updateObject = (oldObject, updaterProperties) => {
    return {
        ...oldObject,
        ...updaterProperties
    }
}