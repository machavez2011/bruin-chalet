import React from 'react';
import PhotosSection from './components/photos-section';
import { SectionsWrapper } from './photos-pages-styles';

const PhotosPage = () => {
    return (
        <SectionsWrapper>
            <PhotosSection sectionName={"Bedrooms"} />
            <PhotosSection sectionName={"Bathrooms"} />
            <PhotosSection sectionName={"Exterior"} />
        </SectionsWrapper>
    )
}

export default PhotosPage;