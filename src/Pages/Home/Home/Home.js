import React from 'react';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div id = "home">
            <Banner></Banner>
            <Services></Services>
            <PhotoGallery></PhotoGallery>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;