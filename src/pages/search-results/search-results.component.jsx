import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './search-results.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {getResults} from "../../redux/search/search.actions";
import CustomButton from "../../components/custom-button/custom-button.component";
import {selectFilteredProperties} from "../../redux/search/search.selectors";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";

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

            <h2 style={{marginBottom: '20px'}}>Search Results</h2>
            <h3>We found the following listings for you</h3>
            <p style={{fontWeight: 'bold', fontSize: '1.2em'}}>9 results found</p>
            <div id="search-images">
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/21.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Greater Accra Region &#9679; Tema</p>
                        <p>Ghc 1300 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/2.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Eastern Region &#9679; Koforidua</p>
                        <p>Ghc 1500 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/3.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Volta Region &#9679; Ho</p>
                        <p>Ghc 1600 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>



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
