"use client";

import dynamic from "next/dynamic";
import Quill from "quill";
import { useRef } from "react";

const DynamicEditor = dynamic(() => import("@/components/custom/editor"), {
  ssr: false,
});

interface ChatInputProps {
  placeholder: string;
}

const ChatInput = ({ placeholder }: ChatInputProps) => {
  const editorRef = useRef<Quill | null>(null);
  return (
    <div className="px-5 w-full">
      <DynamicEditor
        placeholder={placeholder}
        onSubmit={() => {}}
        disabled={false}
        innerRef={editorRef}
      />
    </div>
  );
};

export default ChatInput;
