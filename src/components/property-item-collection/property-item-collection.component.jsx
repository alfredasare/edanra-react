import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectAllProperties} from "../../redux/properties/properties.selectors";
import './property-item-collection.styes.scss';
import PropertyItem from "../property-item/property-item.component";

const PropertyItemCollection = ({region, allProperties}) => {

    const filteredProperties = allProperties.filter((property) => {
        return property.region === region;
    });

    const propertyItems = filteredProperties.map(({id, ...otherPropertyProps}) => (
            <PropertyItem key={id} {...otherPropertyProps}/>
        )
    );

    const regionCheck = filteredProperties.find((item) => {
        return region === item.region
    });

    return (
        <div style={{marginTop: '20px'}} className="container-fluid">
            <div className="row">

                {
                    regionCheck ? <div className="workspace-head-wrapper">
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in {region} Region</h2>
                    </div> : <></>
                }

                <div className="owl-carousel owl-theme">
                    {
                        propertyItems
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allProperties: selectAllProperties
});

export default connect(mapStateToProps)(PropertyItemCollection);
