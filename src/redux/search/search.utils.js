export const getSearchResults = ({filters, allProperties}) => {
    const {town, region, district} = filters;

    return allProperties.filter((property) => {
        if (town !== "" && region === "" && district === "") {
            return property.town.toLowerCase().includes(town.toLowerCase());
        } else if (town === "" && region !== "" && district === "") {
            return property.region === region;
        } else if (town === "" && region === "" && district !== "") {
            return property.district.toLowerCase().includes(district.toLowerCase());
        } else if (town !== "" && region !== "" && district === "") {
            return property.town.toLowerCase().includes(town.toLowerCase()) && property.region === region;
        } else if (town !== "" && region !== "" && district !== "") {
            if (town === region && district === region && town === district) {
                return property.town.toLowerCase().includes(town.toLowerCase()) || property.region.toLowerCase().includes(region.toLowerCase()) || property.district.toLowerCase().includes(district.toLowerCase());
            }
            return property.town.toLowerCase().includes(town.toLowerCase()) && property.region === region && property.district.toLowerCase().includes(district.toLowerCase());
        } else if (town !== "" && region === "" && district !== "") {
            return property.town.toLowerCase().includes(town.toLowerCase()) && property.district.toLowerCase().includes(district.toLowerCase());
        } else if (town === "" && region !== "" && district !== "") {
            return property.region === region && property.district.toLowerCase().includes(district.toLowerCase());
        }
        return null;

    });
};
