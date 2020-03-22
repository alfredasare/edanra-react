export const removeProperty = ({allProperties, property}) => {
    const existingPropertyItem = allProperties.find((propertyToRemove) => {
        return propertyToRemove.uid === property.uid
    });

    if (existingPropertyItem) {
        return allProperties.filter(propertyItem => propertyItem.uid !== property.uid);
    }
};
