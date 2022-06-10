import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center container" id="main">
            <div className="font-medium text-gray-700 lg:mr-60 w-full flex flex-col justify-center items-center">
                <div>
                    <img src="/paul.jpg" alt="" className="rounded-full mb-3 object-cover h-40 w-40 lg:h-96 lg:w-96 shadow-xl lg:mt-0 mt-4" />
                </div>
                <div className="flex lg:mb-0 mb-4">
                    
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/paul-yeboah-asamoah-7580ab1b4">
                        <FontAwesomeIcon 
                            icon={faLinkedinIn} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        /> 
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/paulyeb">
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-lg" 
                            style={{  width: '25px', height: '25px'}} 
                        /> 
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/manlikeluda">
                        <FontAwesomeIcon 
                            icon={faTwitter} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/luda.__/">
                        <FontAwesomeIcon 
                            icon={faInstagram} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        />
                    </a>
                    <a href="#contact_me">
                        <FontAwesomeIcon 
                            icon={faEnvelope} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        />
                    </a>
                </div>
            </div>

            <div className="w-full text-xl">
                <p className="mb-3">
                    Hi, I am Paul, 23, a <span className="font-medium shadow-md">self-taught developer</span> from Ghana. <span className="font-medium"> I have over the past years invested all my time, energy and resoures into studying web development through online courses and with mentorship from an amazing senior developer. </span> After studying Biological Science in college for 4 years and graduating, {!readMore && <button onClick={() => setReadMore(prevState => !prevState)} className="text-blue-400 cursor-pointer hover:font-medium hover:text-blue-600"> Read more...</button>}
                    {readMore && <p>I realized I never really wanted to be in that field. It's just one of those African parenting styles where most important life choices are dictated by parents for their kids. In, 2020 after my graduation, I decided to be bold and make a switch in my academics and career path and take a dive into computer studies which I've always been fanatic about even though I wasn't previleged to be around computers a lot growing up.</p>} {readMore && <button className="text-blue-400 cursor-pointer hover:font-medium hover:text-blue-600" onClick={() => setReadMore(prevState => !prevState)}> Read less</button>}
                </p>
            </div>
        </div>
    )
}