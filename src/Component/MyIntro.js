import React, { Component } from 'react';
import './head.css';
import ameen from '../Images/ameen.jpg';


class Home extends Component {
    render() {
        return (
            <div className="container" >
                <section className="team-section pb-5">
                    <div className="row text-left">
                        <div className="col-lg-12 col-md-12 mb-12">
                            <div className="card card-body">
                                <div>
                                    <img style={{ width: '40%' }} align="right" src={ameen} className=" ml-auto" alt="Ameen Alam" />
                                    <div className="text-center" >
                                        <h5 className="font-weight-bold h5 d-block">
                                            <strong>Ameen Alam</strong>
                                        </h5>
                                        <p className="grey-text">Full Stack Developer</p>
                                    </div>
                                    <p>Hey, I’m Ameen. I’m a web and mobile applications developer from the Pakistan.

                                    I’ve been building websites and mobile applications for over 5 years and currently live in a place called Pakistan with my family, Adele and our cat, Shadow.

                                    You might call me a freelancer, but I prefer the title of consultant. A freelancer is someone you contract to design and code a website, I do a lot more than that.

                                    From the initial conversation to the day of launch, there’s one thing I’m trying to do, grow your business. My speciality is helping small to medium-sized businesses get more customers online, which I do that using design and code.

                                    When I’m not working on client projects, I’m either writing over on my web design blog, Inspirational Pixels or finding new ways to bring more value to my clients at an affordable price.
                                    </p>
                                    <p>
                                        I currently am working as a Mobile developer at Panacloud, which is where my passion for design and development converge. See my previous work history on LinkedIn. Outside of work I have a loat smile and some best friends (obviously). Currently I am not accepting freelance work, but I'd love to get coffee and get to know you, so don’t hesitate to get in touch
                                    </p>
                                    <p>
                                        In the spring of 2013, during my first year of college at Pakistan, I took a general education business course where we were assigned the task of building a webpage in Word. Thus began my love affair with design. After graduating I began working full time for a web and mobile applications company. While I still enjoyed it, for the most part, When I made the move to freelance full time, I decided to let my quirky flag fly, so to speak. It may not be for everyone, but some people are going to love it.
                                    </p>

                                    <h4><strong className="text-dark"> Services: </strong> </h4>

                                    <p><strong className="text-warning" >UI/UX DESIGN </strong> </p>
                                    <p> UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience. </p>

                                    <p><strong className="text-warning" >FRONT END DEVELOPMENT</strong> </p>
                                    <p> Front End Development is building out the visual components of a applications. Using React, Redux, React-Native, JSX, XML HTML, CSS3, Responsive CSS, Bootstrap, material UI, Semantic UI, SCSS, LESS and javascript popular Frame Works and Laibraries I build fast, interactive applications. This also may include integrating a CMS.</p>

                                    <p><strong className="text-warning" >BACK END DEVELOPMENT</strong> </p>
                                    <p> Back End writing is Logic building out the visual components of a Security And Database. Using Node js, Express, Apache, Mongo DB, SQL, Docker javascript popular engine and Laibraries I build fast, interactive applications. This also may include integrating a E-Commerce.</p>
                                    {/* <p>While most of my attention is on interactive projects, I do branding and collateral from time to time. This includes logo design, business cards, and other printed materials.</p> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
