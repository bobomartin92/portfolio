import { Link } from 'react-router-dom'
import Project from './Project'
import sanityClient from '../sanityClient'
import { useEffect, useState } from 'react'

const Projects = () => {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await sanityClient.fetch(
                    `*[_type == "project"] {
                        title,
                        liveLink,
                        codeLink,
                        projectImage{
                            asset->{
                                _id, url
                            },
                            alt
                        }
                    }`
                )

                setProjectData(data)
            } catch (error) {
                console.error()
            }
        }

        fetchData()
    }, [])
  return (
    <section id='projects'>
        <div className="projects-container">
            <div className="projects-header">Projects</div>
            <div className="projects">
                {projectData ? projectData.slice(0, 6).map((project, index) => (
                        <Project key={index} project={project} />
                )) : <div class="bg-indigo-500">
                        Loading...
                        <svg class="animate-spin h-16 w-12 ml-4 ..." viewBox="0 0 24 24" />
                    </div> }
            </div>
        </div>
        {projectData && projectData.length > 6 && <div className="load-more-btn">
                <button><Link to='/projects'>Load More</Link></button>
        </div>}
    </section>
  )
}

export default Projects