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
    "flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 text-sm transition-colors sm:px-4 sm:py-3 sm:text-base";

  const completedClasses =
    "border-emerald-200 bg-emerald-50 text-emerald-900";

  const activeClasses =
    "border-slate-200 bg-slate-50/95 hover:bg-slate-100/95";

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
          className="mt-1 h-4 w-4 rounded border-slate-300 bg-slate-50 text-emerald-600 shadow-[0_0_0_1px_rgba(148,163,184,0.35)] focus:ring-2 focus:ring-emerald-300"
        />
        <div className="flex flex-col">
          <span
            className={`font-medium ${
              task.isCompleted
                ? "line-through text-emerald-700"
                : "text-slate-900"
            }`}
          >
            {task.title}
          </span>
          <span className="mt-0.5 text-xs text-slate-400">
            Создано: {formattedDate}
          </span>
        </div>
      </label>

      <button
        type="button"
        onClick={onDelete}
        className="ml-2 inline-flex items-center rounded-xl border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Удалить
      </button>
    </li>
  );
}

