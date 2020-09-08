import React, { Component } from 'react';
import './head.css'


class Project extends Component {
    render() {
        return (
            <div className="container" >
                {/* //   <!--Projects section v.4--> */}
                <section className="text-center pb-3">

                    {/* <!--Section heading--> */}
                    <h2 className="font-weight-bold mt-3 h1">
                        <strong>My best projects</strong>
                    </h2>
                    {/* <!--Section description--> */}
                    <p className="dark-grey-text pb-2 font-weight-bold text-center">
                        Recent Projects: Samples of some of my best work from the past year.
                    </p>
                    {/* <!--Grid row--> */}
                    <div className="row">

                        {/* <!--Grid column--> */}
                        <div className="col-md-12 mb-4">
                            <div className="title-0 card card-image">
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="purple-text">
                                            <strong>Software house</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>CRCIC Solutions</strong>
                                        </h3>
                                        <p className="pb-3">CRCIC SOLIUTIONS is a high performing Digital Agency, offering full length digital solutions in North America and across UAE. We focus on innovative & interactive online marketing & advertising solutions that deliver results online..</p>
                                        <span onClick={() => window.open('https://www.crcicsolutions.com/', "_blank")} className="btn btn-secondary btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}
                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-01 card card-image" >
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="blue-text">
                                            {/* <i className="fa fa-pie-chart"></i> */}
                                            <strong>Construction</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>The Churchill Group</strong>
                                        </h3>
                                        <p className="pb-3">
                                            The Churchill Group is a leading North West based Civil Engineering & Building Contractor. Our head office is in Edmonton, located centrally in the Canada to serve our clients nationwide.
                                        </p>
                                        <span onClick={() => window.open("https://thechurchill-group.com/", "_blank")} className="btn btn-blue btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-02 card card-image" >
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="orange-text">
                                            {/* <i className="fa fa-eye"></i> */}
                                            <strong>Recruiters</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>Ocean Recruitment</strong>
                                        </h3>
                                        <p className="pb-3">
                                            Ocean Recruitment is a recruiter for the chemical industry. Always looking for the perfect match! We are working for producers, distributors and traders.
                                        </p>
                                        <span onClick={() => window.open('https://www.ocean-recruitment.ca/', "_blank")} className="btn btn-orange btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}
                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-03 card card-image">
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="text-primary">
                                            {/* <i className="fa fa-plane"></i> */}
                                            <strong> Immigration</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>CRCIC Immigration Solutions</strong>
                                        </h3>
                                        <p className="pb-3">
                                            CRCIC’s federal mandate stems from the Immigration and Refugee Protection Act (IRPA) and the Citizenship Act which require anyone providing Canadian immigration or citizenship advice or representation for a fee or other consideration to be a member in good standing of CRCIC. Exceptions are members in good standing of a law society in Canada or the Chambre des notaires du Québec.
                                        </p>
                                        <span onClick={() => window.open('https://crcicimmigration.firebaseapp.com/', "_blank")} className="btn btn-primary btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}
                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-1 card card-image">
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="purple-text">
                                            {/* <i className="fa fa-plane"></i> */}
                                            <strong> Recruiters</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>Freshers World</strong>
                                        </h3>
                                        <p className="pb-3">Freshers world is one of the most popular job portals in asia.It assists jobseekers, internees to find latest jobs and trends in their fields, in accordance with their qualifications. It deals in both government and private sectors ranging from Engineering, IT, Banking to Defense.</p>
                                        <span onClick={() => window.open('https://www.freshersworld.com/', "_blank")} className="btn btn-secondary btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-2 card card-image" >
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="pink-text">
                                            {/* <i className="fa fa-pie-chart"></i> */}
                                            <strong> Construction</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>The Rasisers Builder</strong>
                                        </h3>
                                        <p className="pb-3">
                                            Raisers Builder Design & Build. Civil Engineering Projects. General Construction. The Raisers Builder is a leading North West Civil Engineering & Building Contractor.
                                        </p>
                                        <span onClick={() => window.open("https://www.raisersbuilder.com/", "_blank")} className="btn btn-pink btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <div className="title-3 card card-image" >
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                    <div>
                                        <h6 className="green-text">
                                            <i className="fa fa-eye"></i>
                                            <strong> Entertainment</strong>
                                        </h6>
                                        <h3 className="py-3 font-weight-bold">
                                            <strong>BIG BANG Entertainment</strong>
                                        </h3>
                                        <p className="pb-3">
                                            Electronic entertainment company Big Bang Entertainment specializes in developing multiplayer computer and console video games. BBE strives to create the best online games, be it pick-up and play arcade style games, or deep and rich MMO experiences
                                        </p>
                                        <span onClick={() => window.open('http://www.bigbang-ent.com/', "_blank")} className="btn btn-success btn-rounded btn-md">
                                            <i className="fa fa-clone left"></i> View project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                    </div>
                    {/* <!--Grid row--> */}

                </section>
                {/* // <!--Projects section v.4--> */}

            </div>
        )
    }
}

export default Project;
