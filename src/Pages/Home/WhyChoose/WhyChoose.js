import React from 'react';
import './WhyChoose.css'

const WhyChoose = () => {
    return (
        <div id = "whyChoose" className = "my-5">
            <h1 className = "text-primary">Why Choose Travel Bangladesh?</h1>
            <div className="row my-5 mx-5 my-cards">
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">Awesome Tour place</h2>
                    <p className = "text-dark text-muted">We try to manage different and attractive tour places for our customers every times. People go any where from our travel Bangladesh Ltd. They can enjoy every tour. Their satisfaction is very high about our Organization.</p>
                </div>
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">Best Tourist Guide</h2>
                    <p className = "text-dark text-muted">Tourist Guides act as ambassadors of the country, they are the first to meet and welcome tourists and they are often the last ones to bid farewell to them when they leave the country.Generally, a tourist guide will work at a specific location, city or province. In some cases, guides qualify to guide throughout an entire country. </p>
                </div>
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">All time support</h2>
                    <p className = "text-dark text-muted">Travel services tailored for your business. Online booking. 24 hour telephone support. Bespoke travel services for your business. Efficient. Cost-effective. Reliable. Policy compliance. Cost effective. Corporate travel tools.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;