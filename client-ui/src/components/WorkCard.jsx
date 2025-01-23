import { Link } from "react-router-dom";

const WorkCard = ({ project }) => {
  return (
    <div className="relative group">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center">
        <h3 className="text-white text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <Link to={`/work/${project.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
