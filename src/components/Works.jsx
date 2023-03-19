import Tilt from "react-tilt";
import { github } from '../assets';
import { webpage } from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


const ProjectCard = ({ 
  index, 
  name, 
  description, 
  tags, 
  image, 
  source_code_link, 
  github_repo 
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-2xl" 
          />

          <div className="m-3 card-img_hover">
            {/* <div className="flex justify-between"> */}
            <div
              onClick={() => window.open(source_code_link, "_blank")} 
              className="absolute top-2 right-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={webpage} 
                alt="webpage" 
                className="w-1/2 h-1/2" 
              />
              </div>
              <div
              onClick={() => window.open(github_repo, "_blank")} 
              className="absolute bottom-2 left-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github} 
                alt="github" 
                className="w-1/2 h-1/2" 
              />
              </div>
            {/* </div> */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 uppercase">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  )
}

const Works = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project} //why are we spreading the projects ?
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Works, "work");