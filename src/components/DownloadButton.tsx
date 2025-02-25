type PropsType = {
 readmeContent : string;
}

export default function DownloadButton({ readmeContent } : PropsType) {
    const handleCopy = () => {
      navigator.clipboard.writeText(readmeContent);
      alert("Copied to clipboard!");
    };
  
    const handleDownload = () => {
      const blob = new Blob([readmeContent], { type: "text/markdown" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "README.md";
      link.click();
    };
  
    return (
      <div className="flex gap-2 mt-4">
        <button onClick={handleCopy} className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Copy
        </button>
        <button onClick={handleDownload} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Download
        </button>
      </div>
    );
  }
  