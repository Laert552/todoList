"use client";

import type React from "react";
import { useState } from "react";

interface TodoFormProps {
  onAddTask: (title: string) => void;
}

export function TodoForm({ onAddTask }: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:gap-4"
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Новая задача..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-base"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 sm:text-base"
      >
        Добавить
      </button>
    </form>
  );
}

