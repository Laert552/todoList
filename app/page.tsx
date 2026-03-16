"use client";

import { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import type { Task } from "../types/task";

const STORAGE_KEY = "todo-tasks";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Task[] = JSON.parse(stored);
        setTasks(parsed);
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage", error);
    }
  }, [tasks]);

  const handleAddTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Date.now().toString(),
      title: trimmed,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 text-slate-900">
      <section className="card-pattern w-full max-w-2xl rounded-3xl border border-slate-200/80 bg-slate-50/95 p-6 shadow-xl shadow-slate-300/60 backdrop-blur-sm sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          To-Do List
        </h1>
        <p className="mb-6 text-center text-sm text-slate-500">
          Добавляйте задачи.
        </p>

        <TodoForm onAddTask={handleAddTask} />

        <div className="mt-6 border-t border-slate-800 pt-4">
          <TodoList
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </section>
    </main>
  );
}

