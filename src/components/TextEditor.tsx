import JoditEditor from "jodit-react";
import React, { useCallback, useMemo, useRef, useState } from "react";

const TextEditor = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    [],
  );

  const handleBlur = useCallback((newContent: string) => {
    setContent(newContent);
  }, []);

  const handleChange = useCallback((newContent: string) => {
    // You can handle onChange here if needed
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
