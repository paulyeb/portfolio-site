export default () => {
    const projects = [
        {
            id: 1,
            title: "Parpkin",
            image: "/parpkin.jpg",
            description: 'STILL IN PROGRESS. Few technicalities left to implement in the backend. Parpkin is a food business owned by a friend. I am trying to develop a system with which she can have her customers patronize her over the internet. Customers will be able to create accounts, look through menu, order food and pay for food online and have it delivered to them.',
            skills: ' This system was built with Tailwindcss, Next.js, making use of React Custom Hooks, Context API coupled with a PHP Laravel API & MYSQL that allows administrative operations.',
            github: 'https://github.com/paulyeb/parpkin',
            site: ''
        },
        {
            id: 2,
            title: "Gamerfest",
            image: "/gamefest.jpg",
            description: '',
            github: 'https://github.com/paulyeb/GamerFest',
            site: 'http://gamerfest.herokuapp.com'
        }
    ]
    return (
        <div className="flex flex-col jsutify-center items-center h-screen mt-10">
            <p className="text-4xl mb-4">PROJECTS</p>
            <div className="grid lg:grid-cols-2 gap-6 w-full">
                {projects.map( project => 
                    <div className="w-full" key={project.id}>
                        <div className="h-full w-full border pb-3">
                            <img src={project.image} alt={project.title} className="mb-3 object-cover shadow-xl lg:mt-0 mt-4" />
                            <p className="h-36 text-lg p-1">
                                {project.description} <span className="font-medium">{project.skills}</span>
                            </p>
                            <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href="/" target="_blank">Live Demo</a>
                            </button>
                            <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href={project.github} target="_blank">Github</a>
                            </button>
                            {project.site && <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href={project.site} target="_blank">Site</a>
                            </button>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}