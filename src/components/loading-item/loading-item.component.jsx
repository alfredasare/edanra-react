import React from "react";
import {
    ContentLoader,
    ImageLoader,
    Loader, PriceLoader,
    PropertyTypeLoader,
    RegionLoader
} from "./loading-item.styles";

const LoadingItem = () => {

    return (
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
    );
};

export default LoadingItem;
