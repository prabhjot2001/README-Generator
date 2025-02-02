import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import {
  Bolt,
  Check,
  Code2,
  Copy,
  Eye,
  FileDown,
  Loader,
  Settings2,
  SwatchBook,
} from "lucide-react";
import themeTemplates from "./templates/theme-template";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

import MarkdownComponent from "./MarkdownComponent";
import Editor from "./Editor";

const Main = () => {
  const [sections, setSections] = useState([
    { label: "Github - Introduction", checked: false },
    { label: "Github - About Me", checked: false },
    { label: "Github - Skills", checked: false },
    { label: "Github - Social Links", checked: false },
    { label: "Github - Others", checked: false },
  ]);

  const toggleChecked = (idx: number) => {
    setSections((prevSections) =>
      prevSections.map((section, i) =>
        i === idx ? { ...section, checked: !section.checked } : section
      )
    );
  };

  const [themeTemplateId, setThemeTemplateId] = useState(0);
  const [markdown, setMarkdown] = useState(
    themeTemplates[themeTemplateId].template
  );
  useEffect(() => {
    setMarkdown(themeTemplates[themeTemplateId].template);
  }, [themeTemplateId]);

  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(markdown);
      toast.success("Code copied!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast.error("Copy to clipboard failed.");
    }
  };

  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<"input" | "raw">("input");
  const downloadMarkdownFile = () => {
    setLoading(true);
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setLoading(false);
    toast.success("File downloaded! Thanks visit again 🤗");
  };

  return (
    <div className="h-full flex">
      {/* Left Sidebar */}
      <div className="w-1/5 h-full border-r bg-primary-foreground p-4 overflow-y-auto">
        <div className="flex items-center gap-2">
          <Bolt className="w-5" />
          <span className="font-semibold">Sections</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Select the section you want to add
        </p>

        <div className="mt-6">
          <div className="flex items-center gap-2 rounded-lg p-2 border">
            <SwatchBook className="w-5 text-indigo-500" />
            <p className="text-sm font-medium">Pick theme</p>
          </div>
          <div>
            {themeTemplates.map((theme, idx) => (
              <div
                key={idx}
                onClick={() => setThemeTemplateId(theme.id)}
                className={`flex items-center justify-between transition-all ease-in-out hover:bg-secondary hover:cursor-pointer rounded-md p-2 mt-2 borde ${
                  themeTemplateId === idx ? "font-bold" : ""
                }`}
              >
                <p className="text-sm flex items-center justify-between gap-2">
                  {" "}
                  {theme.name}{" "}
                  {themeTemplateId === idx ? <Check className="w-3" /> : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mt-6" />
        <div className="mt-6">
          <div className="flex items-center gap-2 rounded-lg p-2 border">
            <Settings2 className="w-5" />
            <p className="text-sm font-medium">Add or remove sections</p>
          </div>
          {sections.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-secondary rounded-md p-2 mt-2 border"
            >
              <p className="text-sm">{option.label}</p>
              <Switch
                checked={option.checked}
                onCheckedChange={() => toggleChecked(idx)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Resizable Middle & Preview Panels */}
      <ResizablePanelGroup direction="horizontal" className="flex-1 h-full">
        {/* Markdown Editor */}
        <ResizablePanel className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Code2 className="w-5" />
                <span className="font-semibold">Editor</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Edit the section according to yourself
              </p>
            </div>
            <div className="flex h-6 items-center space-x-2 text-sm">
              <div>
                <Button
                  variant={"secondary"}
                  onClick={() => setTab("input")}
                  className={`relative ${
                    tab == "input" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tab === "input" ? (
                    <div className="w-1 h-1 rounded-full animate-ping bg-green-700" />
                  ) : (
                    ""
                  )}
                  Input
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div>
                <Button
                  variant={"secondary"}
                  onClick={() => setTab("raw")}
                  className={`relative ${
                    tab == "raw" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tab === "raw" ? (
                    <div className="w-1 h-1 rounded-full animate-ping bg-green-700" />
                  ) : (
                    ""
                  )}
                  Raw
                </Button>
              </div>
            </div>
          </div>
          <Separator className="mt-2" />
          {tab === "raw" ? (
            <div className="mt-6 flex-1 relative">
              <div className="absolute top-2 right-2">
                <Button
                  onClick={handleCopyClick}
                  size={"icon"}
                  className="bg-transparent hover:bg-primary-foreground hover:text-black"
                >
                  <Copy className="w-4" />
                </Button>
              </div>
              <textarea
                placeholder="Your markdown code here..."
                className="w-full border-none h-full rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-0 p-2"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}
          {tab === "input" ? <Editor onGenerate={() => {}} /> : ""}
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Preview Panel */}
        <ResizablePanel className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Eye className="w-5" />
                <span className="font-semibold">Preview</span>
              </div>
              <p className="text-sm text-muted-foreground">See live preview</p>
            </div>
            <Button variant={"default"} onClick={downloadMarkdownFile}>
              {loading ? (
                <Loader className="w-5 animate-spin" />
              ) : (
                <FileDown className="w-5" />
              )}
              {loading ? "Downloading" : "Download file"}
            </Button>
          </div>
          <Separator className="mt-2" />
          <div className="mt-6 flex-1 overflow-auto p-2">
            <MarkdownComponent markdown={markdown} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Main;
