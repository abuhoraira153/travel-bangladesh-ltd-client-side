import React from 'react';
import './PhotoGallery.css'
import photo1 from '../../images/gallery/p1.jpg'
import photo2 from '../../images/gallery/p2.jpg'
import photo3 from '../../images/gallery/p3.jpg'
import photo4 from '../../images/gallery/p4.jpg'
import photo5 from '../../images/gallery/p5.jpg'
import photo6 from '../../images/gallery/p6.jpg'
import photo7 from '../../images/gallery/p7.jpg'
import photo8 from '../../images/gallery/p8.jpg'
import photo9 from '../../images/gallery/p9.jpg'

const PhotoGallery = () => {
    return (
        <div id = "photoGallery">
            <h1 className = "text-primary mt-4">Welcome to our Photo Gallery</h1>
           <div className="row gallery">
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo1} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo2} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo3} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo4} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo5} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo6} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo7} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo8} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo9} alt="" />
                </div>
           </div>
        </div>
    );
};

export default PhotoGallery;