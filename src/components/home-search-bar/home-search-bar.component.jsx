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
        const {value} = event.target;
        setFilters({
            ...filters,
            town: value,
            region: value,
            district: value
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div id="motto">
                    <span>Want a room or house to rent?</span> Do a quick search on <span className="teal-head">edanra</span>.
                </div>
            </div>

            <div className="row">
                <form onSubmit={handleSubmit} id="searchbar">
                    <input onChange={handleChange} type="text" name="town" id="town" placeholder="Town, region or district"/>
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