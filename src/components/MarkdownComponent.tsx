import MDEditor from "@uiw/react-md-editor";

const MarkdownComponent = ({ markdown }: { markdown: string }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <MDEditor.Markdown source={markdown} />
    </div>
  );
};

export default MarkdownComponent;
