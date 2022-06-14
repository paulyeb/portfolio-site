export default () => {
    const projects = [
        {
            id: 1,
            title: "Parpkin",
            image: "/parpkin.jpg",
            description: 'STILL IN PROGRESS. Few technicalities left to implement in the backend. Parpkin is a food business owned by a friend. I am    trying to develop a system with which she can have her customers patronize her over the internet. Customers will be able to create accounts, look through menu, order food and pay for food online and have it delivered to them.',
            skills: ' This system was built with Tailwindcss, Next.js, making use of React Hooks & Custom Hooks, React Context API, coupled with a PHP Laravel API & MYSQL that allows administrative operations.',
            github: 'https://github.com/paulyeb/parpkin',
            site: '',
            live_demo: 'https://www.youtube.com/watch?v=bTpimhX0A3o',
            theme: "Restaurant Application"
        },
        {
            id: 2,
            title: "Music Player App",
            image: "/music-app.jpg",
            description: 'This is app is a simple music application with a limited number of hard-coded songs with control buttons to switch between the available songs as well as pause, play and shuffle music. The player also displays details of the current playing song. ie. name of artist, title of song and image of artist.',
            skills: ' This system was built with Tailwindcss and React.js, making use of React Hooks and React Context API.',
            github: 'https://github.com/paulyeb/music-player-app',
            site: 'https://xmusic-app.herokuapp.com',
            live_demo: '',
            theme: "Music Player App"
        },
        {
            id: 3,
            title: "Gamerfest",
            image: "/gamefest.jpg",
            description: 'This one of my early works, more of a follow along from a tutorial course, but refactored into my own theme, coded out of memory without reference to the course after sometime of studying.',
            skills: 'This system was built with HTML, Javascript and Bootstrap.',
            github: 'https://github.com/paulyeb/GamerFest',
            site: 'https://gamerfest.herokuapp.com',
            live_demo: '',
            theme: "Bootcamp Registration Interface"
        }
    ]
    return (
        <div className="flex flex-col jsutify-center items-center h-full mt-10" id="projects">
            <p className="text-4xl mb-4">PROJECTS</p>
            <div className="grid lg:grid-cols-2 gap-6 w-full">
                {projects.map( project => 
                    <div className="w-full mb-5" key={project.id}>
                        <p className="font-medium text-xl">{`${project.id}. ${project.theme}`}</p>
                        <div className="h-full w-full border rounded-lg pb-3">
                            <img src={project.image} alt={project.title} className="mb-3 object-cover shadow-xl lg:mt-0 mt-4" />
                            <p className="h-37 text-lg pl-2">
                                {project.description} <span className="font-medium">{project.skills}</span>
                            </p>
                            {project.live_demo && <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href={project.live_demo} target="_blank" rel="noreferrer">Live Demo</a>
                            </button>}
                            <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                            </button>
                            {project.site && <button className="rounded-lg border px-3 py-1 shadow-lg m-2 text-white bg-gray-800">
                                <a href={project.site} target="_blank" rel="noreferrer">Site</a>
                            </button>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}