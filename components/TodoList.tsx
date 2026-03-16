"use client";

import type { Task } from "../types/task";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-slate-500">
        Пока нет задач. Добавьте первую, чтобы начать.
      </p>
    );
  }

  return (
    <ul className="max-h-[420px] space-y-3 overflow-y-auto pr-1">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

