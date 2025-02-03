import React, { useState, useEffect } from "react";

const Editor = ({ templateData, setMarkdown }) => {
  const { template, requiredFields } = templateData;
  const [formData, setFormData] = useState({});
  const [generatedTemplate, setGeneratedTemplate] = useState("");

  useEffect(() => {
    // Initialize form data with empty values for required fields
    const initialData = requiredFields.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {});
    setFormData(initialData);
  }, [templateData]);

  useEffect(() => {
    // Replace placeholders with user input
    let updatedTemplate = template;
    requiredFields.forEach((field) => {
      const regex = new RegExp(`\\[${field}\\]`, "g");
      updatedTemplate = updatedTemplate.replace(
        regex,
        formData[field] || `[${field}]`
      );
    });
    setGeneratedTemplate(updatedTemplate);
    setMarkdown(updatedTemplate);
  }, [formData, template]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 flex-1 h-full overflow-auto flex flex-col gap-6">
      {/* Dynamic Form */}
      <div className=" bg-slate-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Fill Out Your Profile</h2>
        <form className="space-y-3">
          {requiredFields.map((field: string) => (
            <div key={field}>
              <label className="block text-sm font-medium">
                {field.replace(/_/g, " ")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          ))}
        </form>
      </div>

      {/* Preview */}
      <div className="">
        <h2 className="text-lg font-semibold">Raw Markdown Live Preview</h2>
        <p className="text-sm text-muted-foreground">
          This preview helps you see how code is changing.
        </p>
        <pre
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#718096 #2d3748",
          }}
          className="bg-slate-800 text-white p-4 rounded-lg overflow-auto mt-2"
        >
          {generatedTemplate}
        </pre>
      </div>
    </div>
  );
};

export default Editor;
