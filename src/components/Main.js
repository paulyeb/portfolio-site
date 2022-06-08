import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
    return (
        <div className="flex h-screen lg:flex-row flex-col justify-between items-center container">
            <div className="font-medium text-gray-700 lg:mr-60 w-full flex flex-col justify-center items-center">
                <div>
                    <img src="/paul.jpg" alt="" className="rounded-full mb-3 object-cover h-96 w-96 shadow-xl lg:mt-0 mt-4" />
                </div>
                <div className="flex lg:mb-0 mb-4">
                    
                    <a target="_blank" href="https://linkedin.com/in/paul-yeboah-asamoah-7580ab1b4">
                        <FontAwesomeIcon 
                            icon={faLinkedinIn} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        /> 
                    </a>
                    <a target="_blank" href="https://github.com/paulyeb">
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-lg" 
                            style={{  width: '25px', height: '25px'}} 
                        /> 
                    </a>
                    <a target="_blank" href="https://twitter.com/manlikeluda">
                        <FontAwesomeIcon 
                            icon={faTwitter} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        />
                    </a>
                    <a target="_blank" href="https://instagram.com/luda.__/">
                        <FontAwesomeIcon 
                            icon={faInstagram} 
                            className="p-2 border mx-2 active:bg-gray-200 cursor-pointer rounded-xl" 
                            style={{ width: '25px', height: '25px'}} 
                        />
                    </a>
                </div>
            </div>

            <div className="w-full text-xl">
                <p className="mb-3">
                    Hi, I am Paul, 23, a <span className="font-medium shadow-md">self-taught developer</span> from Ghana. After studying Biological Science in college for 4 years an graduating, I realized I never really wanted to be in that field. It's just one of those African parenting styles where most important life choices are dictated by parents for their kids. In, 2020 after my graduation, I decided to be bold and make a switch in my academics and career path and take a dive into computer studies which I've always been fanatic about even though I wasn't previleged to be around computers a lot growing up. 
                    <span className="font-medium"> I have over the past two years invested all my time and energy and resoures into studying web development through online courses and with mentorship from an amazing senior developer.
                    </span>
                </p>
                <a href="/" className="text-blue-400 cursor-pointer hover:font-medium hover:text-blue-600">Read more about me...</a>
            </div>
        </div>
    )
}

export default Main;