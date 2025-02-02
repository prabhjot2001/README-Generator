import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { skillsList } from "@/data/skills";
// import { socialPlatforms } from "@/data/socials";

const Editor = ({ onGenerate }: { onGenerate: () => void }) => {
  const skillsList = [1, 2];
  const socialPlatforms = [10, 20];
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    skills: [],
    socialLinks: {},
    imageUrl: "",
    customSection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleSocialChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value },
    }));
  };

  return (
    <div className="p-4 space-y-4 mt-4 flex-1 h-full overflow-auto">
      {/* Name Input */}
      <Input
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* About Me */}
      <Textarea
        placeholder="Write about yourself..."
        name="about"
        value={formData.about}
        onChange={handleChange}
      />

      {/* Skills Selection */}
      <div>
        <h3 className="font-medium">Skills</h3>
        <div className="grid grid-cols-3 gap-2">
          {skillsList.map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <Checkbox
                checked={formData.skills.includes(skill)}
                onCheckedChange={() => handleSkillToggle(skill)}
              />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-medium">Social Links</h3>
        {socialPlatforms.map((platform) => (
          <Input
            key={platform}
            placeholder={`${platform} URL`}
            value={formData.socialLinks[platform] || ""}
            onChange={(e) => handleSocialChange(platform, e.target.value)}
          />
        ))}
      </div>

      {/* Image URL */}
      <Input
        placeholder="Profile Image URL"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      {/* Custom Section */}
      <Textarea
        placeholder="Add any custom section..."
        name="customSection"
        value={formData.customSection}
        onChange={handleChange}
      />

      {/* Generate Button */}
      <Button onClick={() => onGenerate(formData)}>Generate README</Button>
    </div>
  );
};

export default Editor;
