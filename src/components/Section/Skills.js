export default () => {
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
        <div className="mt-10 h-screen">
            <div className="container flex lg:flex-row flex-col lg:justify-between justify-center items-center">
                <div className="w-full h-full p-2 text-center">
                    <p className="text-4xl mb-4">SKILLS</p>
                    <div className="grid grid-cols-4 gap-6">
                        {skills.map(
                            skill => <div className="border p-2 bg-gray-800 text-white font-medium rounded-lg shadow-lg">
                                {skill}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="w-full h-full lg:ml-60 mt-10">
                    <p className="text-2xl font-medium ">
                        I am a junior developer, proud of how far I've come actually, from when i rendered my first "Hello World" in the browser to making actual full-fledged applications. Well, not the most sophisticated of applications but looking back to how impossible everything seemed some years ago and seeing what i can do now in web developement is an achievement I am really proud of, coming from a background of not so much of computer studies. It's been quite a journey and I know there is so much to learn in this field of work. I am a continuous learner and more than prepared to learn new skills, and try new technologies. I am hoping to join a family/community of developers whom I can work with, be guided into best practices and learn from them as well as climb up the developer heirachy. Being a loner developer is really a challenging and discouraging situation to find yourself in especially as a newbie or a junior developer.
                    </p>
                </div>
            </div>
        </div>
    )

}