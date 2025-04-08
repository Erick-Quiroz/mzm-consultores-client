"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";

interface RichTextViewerProps {
  value: string;
}

export function RichTextViewer({ value }: RichTextViewerProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      BulletList,
      OrderedList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    editable: false, // Modo de solo lectura
  });

  if (!editor) return null;

  return (
    <div className=" rounded-md p-3 bg-background">
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
}
