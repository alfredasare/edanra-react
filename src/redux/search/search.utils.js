export const getSearchResults = ({filters, allProperties}) => {
    if (filters.town === filters.region && filters.town !== '' && filters.region === filters.district && filters.region !== '' && filters.town === filters.district && filters.town !== '') {
        return allProperties.filter(property => {
            return property.town.toLowerCase().includes(filters.town.toLowerCase()) || property.region.toLowerCase().includes(filters.region.toLowerCase()) || property.district.toLowerCase().includes(filters.district.toLowerCase());
        });
    } else {
        const transformedArray = allProperties.map(property => {
            return {
                ...property
            }
        })

        function filterArray(array, filters) {
            const filterKeys = Object.keys(filters);
            return array.filter(item => {
                return filterKeys.every(key => {
                    if (typeof filters[key] !== 'function') return true;
                    return filters[key](item[key]);
                });
            });
        }

        const transformedFilters = {
            property_type: property_type => property_type.includes(filters.property_type),
            // no_of_bedrooms: no_of_bedrooms => no_of_bedrooms === filters.no_of_bedrooms,
            price: price => price > filters.price_min && price < filters.price_max,
            town: town =>  town.toLowerCase().includes(filters.town.toLowerCase()),
            region: region => region.toLowerCase().includes(filters.region.toLowerCase()),
            district: district =>  district.toLowerCase().includes(filters.district.toLowerCase()),

        }

        console.log(filterArray(transformedArray, transformedFilters));
        return filterArray(transformedArray, transformedFilters);
    }
};
