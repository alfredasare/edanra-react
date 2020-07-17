import React, { useState } from "react";
import { connect } from "react-redux";
import "./search.styles.scss";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import FormInputSlider from "../../components/form-slider/form-slider.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import { createStructuredSelector } from "reselect";
import {
  selectDistricts,
  selectRegions,
} from "../../redux/static-data/static-data.selectors";
import { getResults } from "../../redux/search/search.actions";
import { selectPropertiesForDisplay } from "../../redux/properties/properties.selectors";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../utils/scroll-to-top";

const SearchPage = ({
  districts,
  regions,
  getResults,
  history,
  allProperties,
}) => {
  const [filters, setFilters] = useState({
    town: "",
    region: "",
    district: "",
    no_of_bedrooms: "",
    property_type: "",
    price_min: 100,
    price_max: 800,
  });

  const { property_type } = filters;

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(filters);
    getResults({ filters, allProperties });
    history.push(`/search-results`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const sliderChange = (event) => {
    //event.preventDefault();
    setFilters({
      ...filters,
      price_min: event[0],
      price_max: event[1],
    });
  };

  const { region, district } = filters;

  return (
    <>
      <Helmet>
        <title>Search Through Our Catalogue Of Ads</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main className="container">
        <div className="row">
          <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2">
            <form
              style={{ marginBottom: "6em" }}
              onSubmit={handleSubmit}
              className="custom-form animated fadeIn delay-1s"
            >
              <h2>Find a home in your preferred location</h2>

              <FormInputText
                handleChange={handleChange}
                type="text"
                name="town"
                id="town"
                label="Town"
              />

              <h4 style={{ fontWeight: "bold" }}>Filters : </h4>

              <div className="form-group">
                <label style={{ color: "rgba(0,0,0,0.5)" }} htmlFor="region">
                  Region
                </label>
                <select
                  value={region}
                  onChange={handleChange}
                  className="form-control"
                  data-style="btn btn-link"
                  id="region"
                  name="region"
                  required
                >
                  <option value>Select an option</option>
                  {regions.map((region, idx) => {
                    return (
                      <option
                        key={idx + 30}
                        value={region}
                      >{`${region} Region`}</option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  value={district}
                  onChange={handleChange}
                  list="district"
                  className="form-control"
                  name="district"
                  autoComplete="off"
                />
                <datalist id="district">
                  {districts.map((district, idx) => {
                    return <option key={idx} value={district} />;
                  })}
                </datalist>
              </div>

              <FormInputText
                handleChange={handleChange}
                type="number"
                min="0"
                name="no_of_bedrooms"
                id="no_of_bedrooms"
                label="Number of bedrooms"
              />

              <FormInputSlider
                price={[filters.price_min, filters.price_max]}
                label="Price"
                id="price_slider"
                max={1000}
                min={20}
                sliderChange={sliderChange}
              />

              <h5 style={{ fontWeight: "bold" }}>Property type</h5>
              <div className="form-check form-check-radio">
                <label htmlFor="house" className="form-check-label">
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="radio"
                    name="property_type"
                    id="house"
                    value="House"
                    checked={property_type === "House"}
                  />
                  House
                  <span className="circle">
                    <span className="check" />
                  </span>
                </label>
              </div>
              <div className="form-check form-check-radio">
                <label htmlFor="hotel" className="form-check-label">
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="radio"
                    name="property_type"
                    id="hotel"
                    value="Hotel"
                    checked={property_type === "Hotel"}
                  />
                  Hotel
                  <span className="circle">
                    <span className="check" />
                  </span>
                </label>
              </div>
              <div className="form-check form-check-radio">
                <label htmlFor="guest-house" className="form-check-label">
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="radio"
                    name="property_type"
                    id="guest-house"
                    value="Guest House"
                    checked={property_type === "Guest House"}
                  />
                  Guest House
                  <span className="circle">
                    <span className="check" />
                  </span>
                </label>
              </div>
              <div className="form-check form-check-radio">
                <label htmlFor="hostel" className="form-check-label">
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="radio"
                    name="property_type"
                    id="hostel"
                    value="Hostel"
                    checked={property_type === "Hostel"}
                  />
                  Hostel
                  <span className="circle">
                    <span className="check" />
                  </span>
                </label>
              </div>
              <div className="form-check form-check-radio">
                <label htmlFor="apartment" className="form-check-label">
                  <input
                    onChange={handleChange}
                    className="form-check-input"
                    type="radio"
                    name="property_type"
                    id="apartment"
                    value="Apartment"
                    checked={property_type === "Apartment"}
                  />
                  Apartment
                  <span className="circle">
                    <span className="check" />
                  </span>
                </label>
              </div>

              <CustomButtonsContainer>
                <CustomButton type="submit">Search</CustomButton>
                <CustomButton type="reset" inverted="true">
                  Reset
                </CustomButton>
              </CustomButtonsContainer>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  districts: selectDistricts,
  regions: selectRegions,
  allProperties: selectPropertiesForDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  getResults: (filters) => dispatch(getResults(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
