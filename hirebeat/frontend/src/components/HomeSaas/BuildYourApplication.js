import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import feature5 from "../public/images/home-saas/feature5.png";
import shape9 from "../public/images/shape/shape9.png";


class BuildYourApplication extends Component {
    render() {
        return (
            <section className="services-area ptb-100 bg-f4f6fc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <ReactWOW animation='fadeInLeft' delay='0.3s'>
                            <div className="services-image">
                                <div className="image">
                                    <img src={feature5} alt="image" />
                                </div>
                            </div>
                        </ReactWOW>

                        <div className="services-content it-service-content">
                            <div className="content">
                                <div className="fun-facts-inner-content">
                                    <h2>Build Beautiful Interface Into Your Application</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    <ul>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Professional Code
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Unimited Video Call
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Add Favourite contact
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Camera Filter
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Standard Coding Format
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="default-btn black-btn">
                                            <i className="bx bxs-arrow-to-right"></i>
                                            Read More 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape9">
                    <img src={shape9} alt="image" />
                </div>
            </section>
        );
    }
}

export default BuildYourApplication;