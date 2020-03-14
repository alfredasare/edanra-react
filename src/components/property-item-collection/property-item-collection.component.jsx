import React, {useState} from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectIsPropertyFetching, selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";
import './property-item-collection.styes.scss';
import PropertyItem from "../property-item/property-item.component";
import LoadingContainer from "../loading-container/loading-container.component";
// import PropertyItemContainer from "../property-item/property-item.container";

const PropertyItemCollection = ({region, allProperties, isLoading}) => {

    const [visible, setVisible] = useState(3);
    // const [display, setDisplay] = useState('block');

    const filteredProperties = allProperties.filter((property) => {
        return property.region === region;
    });

    const propertyItems = filteredProperties.slice(0, visible).map(({uid, ...otherPropertyProps}) => (
            <PropertyItem key={uid} {...otherPropertyProps}/>
        )
    );

    const regionCheck = filteredProperties.find((item) => {
        return region === item.region
    });

    const loadMore = () => {
        setVisible(visible => visible + 3);
        // if (visible >= filteredProperties.length) {
        //     setDisplay('none');
        // }
    };


    return (
        <div style={{marginTop: '20px'}} className="container">
            {
                regionCheck ? <div className="workspace-head-wrapper">
                    <h2 className="workspace-head"><span className="first-word">Homes</span> in {region} Region</h2>
                </div> : <></>
            }
            <div className="row">

                {
                    isLoading ? <LoadingContainer/> : propertyItems
                }


            </div>
            <div className="row">
                {
                    regionCheck
                        ? visible < filteredProperties.length && <button className="load-more" onClick={loadMore}>Load More</button>
                        : <></>
                }
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allProperties: selectPropertiesForDisplay,
    isLoading: selectIsPropertyFetching
});

export default connect(mapStateToProps)(PropertyItemCollection);
