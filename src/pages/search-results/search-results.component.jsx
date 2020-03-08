import React from "react";
import './search-results.styles.scss';

const SearchResultsPage = () => {

    return (
        <main className="container">
            <form style={{marginTop: '100px'}} method="GET" action="">
                <h2>Search again</h2>
                <div className="form-row">
                    <div className="col-12 col-md-4 form-group">
                        <input className="custom-search-inputs" id="q" type="text" name="q"
                               placeholder="Search Town: Eg, Accra"
                               style={{width: '100%',paddingBottom: '0', marginTop: '5px', height: '60px', paddingLeft: '10px'}}/>
                    </div>

                    <div className="col-12 col-md-4 form-group">
                        <select id="region" className="custom-select rounded-0 input-md"
                                style={{width: '100%',paddingBottom: '0px',marginTop: '5px',height: '60px'}} name="rg">
                            <option disabled selected>REGIONS</option>
                            <option value="AS">Ashanti</option>
                            <option value="BA">Brong-Ahafo</option>
                            <option value="CE">Central</option>
                            <option value="EA">Eastern</option>
                            <option value="GA">Greater Accra</option>
                            <option value="NO">Northern</option>
                            <option value="UE">Upper East</option>
                            <option value="UW">Upper West</option>
                            <option value="VO">Volta</option>
                            <option value="WE">Western</option>
                            <option style={{display: 'none'}} disabled="">N/A</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-4 form-group">
                        <input className="custom-search-inputs" list="district" placeholder="DISTRICT" name="District"
                               autoComplete="on"
                               style={{width: '100%',paddingBottom: '0', marginTop: '5px', height: '60px', paddingLeft: '10px'}}/>
                        <datalist id="district">
                            <option value="Adansi North District"/>
                            <option value="Bekwai Municipal District"/>
                            <option value="Tema Metropolitan District"/>
                            <option value="Shai Osudoku"/>
                            <option value="La Nkwantanang Madina Municipal District"/>
                            <option value="Ga West Municipal District"/>
                            <option value="Tolon District"/>
                        </datalist>
                    </div>
                </div>

                <div className="row">
                    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}
                         className="form-group col-12">
                        <button id="next" type="submit" className="btn btn-primary"
                                style={{padding: '10px 30px',fontSize: '1.3em'}}>
                            Search
                        </button>
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
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/4.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Northern Region &#9679; Tamale</p>
                        <p>Ghc 1700 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/5.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Ashanti Region &#9679; Adum</p>
                        <p>Ghc 1300 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/6.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Greater Accra Region &#9679; Tema</p>
                        <p>Ghc 1300 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/7.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Ashanti Region &#9679; Adum</p>
                        <p>Ghc 1300 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/8.jpg')} alt=""/>
                    <div className="card-body">
                        <p>Northern Region &#9679; Tamale</p>
                        <p>Ghc 1700 per year</p>
                        <a href="#">View Listing</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/img/9.jpg')} alt=""/>
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

export default SearchResultsPage;
