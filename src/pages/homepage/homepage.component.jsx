import React from "react";
import {connect} from 'react-redux';
import './homepage.styles.scss';
import PropertyItemCollection from "../../components/property-item-collection/property-item-collection.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import {createStructuredSelector} from "reselect";
import {selectRegions} from "../../redux/static-data/static-data.selectors";
import HowToUse from "../../components/how-to-use/how-to-use.component";
import Hero from "../../components/hero/hero.component";
import ReadyToEarn from "../../components/ready-to-earn/ready-to-earn.component";
import HomeSearchBar from "../../components/home-search-bar/home-search-bar.component";
import HostingSteps from "../../components/hosting-steps/hosting-steps.component";
import {Helmet} from "react-helmet";
import {selectAllPropertiesLength} from "../../redux/properties/properties.selectors";


const HomePage = ({regions, properties}) => {

    return (
        <>
            <Helmet>
                <title>Edanra - Rent a house or room in Ghana</title>
            </Helmet>
            <Navbar/>
            <Hero/>
            <HomeSearchBar/>
            <HowToUse/>
            <HostingSteps/>

            {
                properties > 0 ? <div className="container">
                    <div className="row">
                        <h2 style={{marginLeft: '10px', marginTop: '70px'}}>Find yourself a home that suits your exact
                            needs</h2>
                    </div>
                </div> : <></>
            }

            {
                regions.map((region) => (<PropertyItemCollection key={region} region={region}/>))
            }

            <ReadyToEarn/>
            <Footer/>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    regions: selectRegions,
    properties: selectAllPropertiesLength
});

export default connect(mapStateToProps)(HomePage);
