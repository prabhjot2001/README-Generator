import { useState } from "react";

const techOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

type PropsType = {
  onChange: (selectedTech: string[]) => void;
};

export default function TechStackSelector({ onChange }: PropsType) {
  const [selectedTech, setSelectedTech] = useState<string[]>([]); 

  const handleSelect = (tech: string) => {
    let updatedTech: string[];
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
            selectedTech.includes(tech)
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
