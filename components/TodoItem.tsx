"use client";

import type { Task } from "../types/task";

interface TodoItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  const formattedDate = new Date(task.createdAt).toLocaleString();

  const baseClasses =
    "flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors sm:px-4 sm:py-3 sm:text-base";

  const completedClasses =
    "border-emerald-500/40 bg-emerald-950/50 text-slate-200";

  const activeClasses =
    "border-slate-800 bg-slate-900/60 hover:border-slate-600";

  return (
    <li
      className={`${baseClasses} ${
        task.isCompleted ? completedClasses : activeClasses
      }`}
    >
      <label className="flex flex-1 cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={onToggle}
          className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-2 focus:ring-emerald-500"
        />
        <div className="flex flex-col">
          <span
            className={`font-medium ${
              task.isCompleted
                ? "line-through text-slate-400"
                : "text-slate-100"
            }`}
          >
            {task.title}
          </span>
          <span className="mt-0.5 text-xs text-slate-500">
            Создано: {formattedDate}
          </span>
        </div>
      </label>

      <button
        type="button"
        onClick={onDelete}
        className="ml-2 inline-flex items-center rounded-lg border border-red-500/60 bg-red-900/40 px-2 py-1 text-xs font-medium text-red-100 transition-colors hover:bg-red-800/70 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Удалить
      </button>
    </li>
  );
}

