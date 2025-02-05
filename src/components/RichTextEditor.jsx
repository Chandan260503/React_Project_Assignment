import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedData = localStorage.getItem("editorContent");
    return savedData
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedData)))
      : EditorState.createEmpty();
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (editorState.getCurrentContent().hasText()) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Leave anyway?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [editorState]);

  const handleSave = () => {
    const content = editorState.getCurrentContent();
    localStorage.setItem(
      "editorContent",
      JSON.stringify(convertToRaw(content))
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Rich Text Editor
        </h2>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="border rounded-lg p-2 shadow-md"
          editorClassName="min-h-[200px] p-2"
          toolbar={{
            options: ["inline", "list", "textAlign", "history"],
            inline: { options: ["bold", "italic", "underline"] },
            list: { options: ["unordered", "ordered"] },
          }}
        />
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                    hover:bg-blue-600 hover:scale-105 transition duration-300 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
