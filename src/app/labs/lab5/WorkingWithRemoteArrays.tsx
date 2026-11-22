"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const field = "rounded border border-neutral-300 px-3 py-2";
const button = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
const row = "mb-2 flex flex-wrap items-center gap-2";

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={button} href={API}>
        Get Todos
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className={row}>
        <input id="wd-todo-id" className={field} value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
        <a id="wd-retrieve-todo-by-id" className={button} href={`${API}/${todo.id}`}>
          Get Todo by ID
        </a>
      </div>
      <hr />
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={button} href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={button} href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={button} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <hr />
      <h4>Updating an Item in an Array</h4>
      <div className={row}>
        <input id="wd-todo-update-id" className={`${field} w-24`} value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
        <input id="wd-todo-title" className={field} value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        <a id="wd-update-todo-title" className={button}
          href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}>
          Update Todo
        </a>
      </div>
      <div className={row}>
        <label htmlFor="wd-todo-completed" className="flex items-center gap-2">
          <input id="wd-todo-completed" type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
          Completed
        </label>
        <a id="wd-update-todo-completed" className={button}
          href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Complete Todo ID = {todo.id}
        </a>
      </div>
      <div className={row}>
        <input id="wd-todo-description" className={`${field} min-w-80`}
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        <a id="wd-update-todo-description" className={button}
          href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}>
          Describe Todo ID = {todo.id}
        </a>
      </div>
      <hr />
    </div>
  );
}
