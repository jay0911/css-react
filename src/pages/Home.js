import React,{ useRef } from 'react';
import './Home.scss';
import menu from '../assets/menu.svg'
import exit from '../assets/exit.svg'
import watch from '../assets/watch.svg'
import illustration from '../assets/illustration.svg'
import holdingphone from '../assets/holding-phone.jpg'
import person from '../assets/person.jpg'

const Home = () => {

    const mobileBtn = useRef(null);
    const nav = useRef(null);

    function mobileBtnClick(){
        document.getElementById("mobile-cta").classList.add("menu-btn");
    }

    function mobileBtnExit(){
        document.getElementById("mobile-cta").classList.remove("menu-btn");
    }

    return(
        <div class="body">
            <div class="navbar">
                <div class="container">
                    <a class="logo" href="#">Remember<span>That</span></a>

                    <img onClick={mobileBtnClick} class="mobile-menu" src={menu} alt="Open Navigation"></img>

                    <nav id="mobile-cta">

                        <img id="mobile-exit" onClick={mobileBtnExit} class="mobile-menu-exit" src={exit} alt="Close Navigation"></img>

                        <ul class="primary-nav">
                            <li class="current"><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>

                        <ul class="secondary-nav">
                            <li><a href="#">Contact</a></li>
                            <li class="go-premium-cta"><a href="#">Go premium</a></li>
                        </ul>
                        <ul class="secondary-nav">
                            <li><a href="#">Contact</a></li>
                            <li class="go-premium-cta"><a href="#">Go premium</a></li>
                        </ul>
                        <ul class="primary-nav">
                            <li class="current"><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <section class="hero">
                <div class="container">
                    <div class="left-col">
                        <p class="subhead">
                            It's Nitty &amp; Gritty
                        </p>
                        <h1>A Task App That Doesn't Stink</h1>
                        <div class="hero-cta">
                            <a href="#" class="primary-cta">Try for free</a>
                            <a href="#" class="watch-video-cta">
                                <img src={watch} alt="Watch a video"></img>
                                Watch a video
                            </a>
                        </div>
                    </div>

                    <img src={illustration} class="hero-img" alt="Illustration"></img>
                </div>
            </section>

            <section class="feature-section">
                <div class="container">
                    <ul class="feature-list">
                        <li>Unlimited Tasks</li>
                        <li>SMS Task Reminders</li>
                        <li>Confetti Explosions upon Task Completions</li>
                        <li>Social Media Announcements</li>
                        <li>Real Time Collaboration</li>
                        <li>Other awesome features</li>
                    </ul>
                </div>
                <img src={holdingphone} alt="Man holding phone"></img>
            </section>

            <section class="testimonials-section">
                <div class="container">
                    <ul>
                        <li>
                            <img src={person} alt="Person"></img>
                            <blockquote>"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={person} alt="Person"></img>
                            <blockquote>"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={person} alt="Person"></img>
                            <blockquote>"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="contact-section">
                <div class="container">
                    <div class="contact-left">
                        <h2>Contact</h2>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"></input>

                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>

                        <input type="submit" class="send-message-cta" value="Send message"></input>
                    </div>

                    <div class="contact-right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home