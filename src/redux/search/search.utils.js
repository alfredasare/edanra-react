export const getSearchResults = ({filters, allProperties}) => {


    const transformedArray = allProperties.map(property => {
        return {
            ...property
        }
    })

    function filterArray(array, filters) {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
            // validates all filter criteria
            return filterKeys.every(key => {
                // ignores non-function predicates
                if (typeof filters[key] !== 'function') return true;
                return filters[key](item[key]);
            });
        });
    }

    const transformedFilters = {
        town: town => town.toLowerCase().includes(filters.town.toLowerCase()),
        region: region => region.toLowerCase().includes(filters.region.toLowerCase()),
        district: district =>  district.toLowerCase().includes(filters.district.toLowerCase()),
    }

    console.log(filterArray(transformedArray, transformedFilters));
    return filterArray(transformedArray, transformedFilters);
};
