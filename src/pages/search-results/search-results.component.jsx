import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './search-results.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {getResults} from "../../redux/search/search.actions";
import CustomButton from "../../components/custom-button/custom-button.component";
import {selectFilteredProperties} from "../../redux/search/search.selectors";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";
import SearchItem from "../../components/search-item/search-item.component";

const SearchResultsPage = ({regions, districts, getResults, results, allProperties}) => {

    useEffect(() => {
        console.log(results);
    }, [results]);

    const [filters, setFilters] = useState({
        town: "",
        region: "",
        district: ""
    });

    const handleSubmit = event => {
        event.preventDefault();
        getResults({filters, allProperties});
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const {region, district} = filters;

    const searchItems = results.length > 0
        ? results.map(({uid, ...otherProps}) => (
            <SearchItem key={uid} {...otherProps}/>
        ))
        : <></>;

    return (
        <main className="container">
            <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>
                <h2>Search again</h2>
                <div className="form-row">
                    <div className="col-12 col-md-4 form-group">
                        <input onChange={handleChange} className="custom-search-inputs" id="town" type="text" name="town"
                               placeholder="Search Town: Eg, Accra"
                               style={{width: '100%',paddingBottom: '0', marginTop: '5px', height: '60px', paddingLeft: '10px'}}/>
                    </div>

                    <div className="col-12 col-md-4 form-group">
                        <select value={region} onChange={handleChange} id="region" className="custom-select rounded-0 input-md"
                                style={{width: '100%',paddingBottom: '0px',marginTop: '5px',height: '60px'}} name="region">
                            <option>CHOOSE REGION</option>
                            {
                                regions.map((region, idx) => {
                                    return (<option key={idx + 30} value={region}>{`${region} Region`}</option>);
                                })
                            }
                        </select>
                    </div>

                    <div className="col-12 col-md-4 form-group">
                        <input value={district} onChange={handleChange} className="custom-search-inputs" list="district" placeholder="DISTRICT" name="district"
                               autoComplete="on"
                               style={{width: '100%',paddingBottom: '0', marginTop: '5px', height: '60px', paddingLeft: '10px'}}/>
                        <datalist id="district">
                            {
                                districts.map((district, idx) => {
                                    return (<option key={idx} value={district}/>);
                                })
                            }
                        </datalist>
                    </div>
                </div>

                <div className="row">
                    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}
                         className="form-group col-12">
                        <CustomButton type='submit'>Search</CustomButton>
                    </div>
                </div>
            </form>

            {

                searchItems.length > 0 ? <>
                    <h2 style={{marginBottom: '20px'}}>Search Results</h2>
                    <h3>We found the following listings for you</h3>
                    <p style={{fontWeight: 'bold', fontSize: '1.2em'}}>
                        {searchItems.length !== 1 ? `${searchItems.length} results found` : `${searchItems.length} results found`}
                    </p>
                </> :
                    <div style={{height: '45vh'}}>
                        <h2>Your search did not match any listing</h2>
                        <h3>Suggestions:</h3>
                        <ul>
                            <li>Try a different word</li>
                            <li>Try general location names</li>
                            <li>Make sure words are spelled directly</li>
                        </ul>
                    </div>
            }

            <div id="search-images">
                {searchItems}
            </div>
        </main>
    );
};

const mapStateToProps = createStructuredSelector({
    districts: selectDistricts,
    regions: selectRegions,
    results: selectFilteredProperties,
    allProperties: selectPropertiesForDisplay,
});

const mapDispatchToProps = dispatch => ({
    getResults: (filters) => dispatch(getResults(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
