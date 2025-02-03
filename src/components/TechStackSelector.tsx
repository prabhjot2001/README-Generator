import { useState } from "react";

const techOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

export default function TechStackSelector({ onChange }) {
  const [selectedTech, setSelectedTech] = useState([]);

  const handleSelect = (tech) => {
    let updatedTech;
    if (selectedTech.includes(tech)) {
      updatedTech = selectedTech.filter((item) => item !== tech);
    } else {
      updatedTech = [...selectedTech, tech];
    }
    setSelectedTech(updatedTech);
    onChange(updatedTech);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {techOptions.map((tech) => (
        <button
          key={tech}
          onClick={() => handleSelect(tech)}
          className={`px-3 py-1 rounded-lg text-sm ${
            selectedTech.includes(tech) ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
