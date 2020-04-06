import React, {useState} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './home-search-bar.styles.scss';
import {getResults} from "../../redux/search/search.actions";
import {createStructuredSelector} from "reselect";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";

const HomeSearchBar = ({getResults, allProperties, history}) => {

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

    return (
        <div className="container">
            <div className="row">
                <div id="motto">
                    <span>Want a place to buy or stay?</span> Do a quick search on Efiewura.
                </div>
            </div>

            <div className="row">
                <form onSubmit={handleSubmit} id="searchbar">
                    <input onChange={handleChange} type="text" name="town" id="town" placeholder="Destination, city, address"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allProperties: selectPropertiesForDisplay,
});

const mapDispatchToProps = dispatch => ({
    getResults: (filters) => dispatch(getResults(filters))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeSearchBar));