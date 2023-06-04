"use client";
import Form from "./form";

export default function Home() {
  const onSubmit = (content: string) => {
    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
