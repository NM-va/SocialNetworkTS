export const updateObjectInArray = (items: any, itemId: string, objPropName: string, newObjProps: any):any => {
    items.map((user: any) => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user;
    });
};