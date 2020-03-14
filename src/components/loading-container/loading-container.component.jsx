import React from 'react';
import {
    ContentLoader,
    ImageLoader,
    Loader,
    PriceLoader,
    PropertyTypeLoader,
    RegionLoader
} from "./loading-container.styles";

const LoadingContainer = () => {
    return(
        <>
            <div className="col-md-4">
                <Loader>
                    <ImageLoader/>
                    <ContentLoader>
                        <RegionLoader/>
                        <PropertyTypeLoader/>
                        <PriceLoader/>
                    </ContentLoader>
                </Loader>
            </div>
            <div className="col-md-4">
                <Loader>
                    <ImageLoader/>
                    <ContentLoader>
                        <RegionLoader/>
                        <PropertyTypeLoader/>
                        <PriceLoader/>
                    </ContentLoader>
                </Loader>
            </div>
            <div className="col-md-4">
                <Loader>
                    <ImageLoader/>
                    <ContentLoader>
                        <RegionLoader/>
                        <PropertyTypeLoader/>
                        <PriceLoader/>
                    </ContentLoader>
                </Loader>
            </div>
        </>
    );
};

export default LoadingContainer;
