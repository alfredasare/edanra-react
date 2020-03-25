import {createSelector} from 'reselect';

const selectIsUploadingState = state => state.propertyUpload;

export const selectIsUploading = createSelector(
    [selectIsUploadingState],
    propertyUpload => propertyUpload.isUploading
);

export const selectIsPropertyUploaded = createSelector(
    [selectIsUploadingState],
    propertyUpload => propertyUpload.uploadedProperty
);

export const selectIsPropertyEdited = createSelector(
    [selectIsUploadingState],
    propertyUpload => propertyUpload.isPropertyEdited
);
