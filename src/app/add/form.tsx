"use client";
import { ChangeEvent, useState } from "react";
const MAX_LENGTH = 1337;

export default function Form({
  onSubmit,
}: {
  onSubmit: (content: string) => void;
}) {
  const [text, setText] = useState("");
  const remainChars = MAX_LENGTH - text.length;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > MAX_LENGTH) {
      event.preventDefault();
      return;
    }

    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full h-32 p-4 outline-none"
        placeholder="bugun ne yasadin? anlat bakalim."
        onChange={handleChange}
        value={text}
        data-gramm_editor="false"
      ></textarea>
      <div>
        {remainChars} / {MAX_LENGTH}
      </div>
      <button className="text-xl italic" onClick={() => onSubmit(text)}>
        kaydet
      </button>
    </div>
  );
}
