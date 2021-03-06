import Project from '../components/Project'
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
      <main className='min-h-screen p-12'>
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects</h1>
                <h2 className='text-lg text-gray-500 flex justify-center mb-12'>Welcome to my projects page!</h2>
                <section className="projects">
                    {projectData && projectData.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </section>
            </section>
      </main>
  )
}

export default Projects