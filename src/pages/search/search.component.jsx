import React, {useState} from "react";
import {connect} from 'react-redux';
import './search.styles.scss';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import {createStructuredSelector} from "reselect";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {getResults} from "../../redux/search/search.actions";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";

const SearchPage = ({districts, regions, getResults, history, allProperties}) => {

    const [filters, setFilters] = useState({
        town: "",
        region: "",
        district: ""
    });

    const handleSubmit = event => {
        event.preventDefault();
        getResults({filters, allProperties});
        history.push(`/search-results`);
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
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2">
                    <form onSubmit={handleSubmit} className="custom-form animated fadeIn delay-1s">
                        <h2>Find a home in your preferred location</h2>

                        <FormInputText handleChange={handleChange} type='text' name='town' id='town' label='Town'/>


                        <h4 style={{fontWeight: 'bold'}}>Filters : </h4>

                        <div className="form-group">
                            <label style={{color: 'rgba(0,0,0,0.5)'}} htmlFor="region">Region</label>
                            <select value={region} onChange={handleChange} className="form-control"
                                    data-style="btn btn-link" id="region" name="region"
                                    required>
                                <option value>Select an option</option>
                                {
                                    regions.map((region, idx) => {
                                        return (<option key={idx + 30} value={region}>{`${region} Region`}</option>);
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="district">District</label>
                            <input value={district} onChange={handleChange} list="district" className="form-control"
                                   name="district" autoComplete="off"/>
                            <datalist id="district">
                                {
                                    districts.map((district, idx) => {
                                        return (<option key={idx} value={district}/>);
                                    })
                                }
                            </datalist>
                        </div>

                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Search</CustomButton>
                            <CustomButton type='reset' inverted="true">Reset</CustomButton>
                        </CustomButtonsContainer>
                    </form>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = createStructuredSelector({
    districts: selectDistricts,
    regions: selectRegions,
    allProperties: selectPropertiesForDisplay,
});

const mapDispatchToProps = dispatch => ({
    getResults: (filters) => dispatch(getResults(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
