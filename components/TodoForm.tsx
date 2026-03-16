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
        className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 sm:text-base"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-200/70 transition-colors hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-50 sm:text-base"
      >
        Добавить
      </button>
    </form>
  );
}

