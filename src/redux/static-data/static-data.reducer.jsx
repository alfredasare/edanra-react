import DISTRICTS from './districts.data';
import REGIONS from './regions.data';

const INITIAL_STATE = {
    districts: DISTRICTS,
    regions: REGIONS,
};

const staticDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default staticDataReducer;
