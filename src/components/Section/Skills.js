import { useState } from "react";

export default () => {
    const [showMore, setShowMore] = useState(false);

    const skills = [
        'HTML',
        'CSS',
        'TAILWINDCSS',
        'BOOTSTRAP',
        'JAVASCRIPT',
        'REACTJS',
        'NEXTJS',
        'PHP',
        'LARAVEL',
        'MYSQL',
        'GIT',
        'GITHUB',
    ];

    return (
        <div className="mt-10">
            <div className="container flex xl:flex-row flex-col xl:justify-between justify-center items-center">
                <div className="w-full h-full p-2 text-center">
                    <p className="text-4xl mb-4">SKILLS</p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                        {skills.map( (skill, index) => 
                            <div 
                                className="border p-2 bg-gray-800 text-white font-medium rounded-lg shadow-lg" 
                                key={index}
                            >
                                {skill}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="w-full h-full xl:ml-60 mt-10">
                    <p className="lg:text-2xl text-xl font-medium ">
                        As a developer, I am proud of how far I've come actually, from when i rendered my first "Hello World" in the browser to making actual full-fledged applications. Well, not the most sophisticated of applications but looking back to how impossible everything seemed some years ago and seeing what i can do now in web developement is an achievement I am really proud of, coming from a background of not so much of computer studies.{!showMore && <button className=" mx-2 border p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-gray-800 text-gray-200 cursor-pointer hover:font-medium" onClick={() =>setShowMore((prevState) => !prevState)}>Read More...</button>} { showMore && <span>It's been quite a journey and I know there is so much to learn in this field of work. I am a continuous learner and more than prepared to learn new skills, and try new technologies. I am hoping to join a family/community of developers whom I can work with, be guided into best practices and learn from them as well as climb up the developer heirachy. Being a loner developer is really a challenging and discouraging situation to find yourself in especially as a newbie or a junior developer.{showMore && <button className="mx-2 border p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-gray-800 text-gray-200 cursor-pointer hover:font-medium" onClick={() =>setShowMore((prevState) => !prevState)}>Read Less</button>}</span>}
                    </p>
                </div>
            </div>
        </div>
    )

}