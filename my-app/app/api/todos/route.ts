import { NextRequest, NextResponse } from "next/server";

// ---- Types ----
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface CreateTodoBody {
  title: string;
}

// ---- In-memory "database" ----
// NOTE: this resets whenever the server restarts / redeploys.
// Also, in dev mode with hot-reload, this module can be re-imported,
// so we stash it on globalThis to survive reloads.
const globalForTodos = globalThis as unknown as { todos?: Todo[] };
const todos: Todo[] = globalForTodos.todos ?? (globalForTodos.todos = []);

// ---- GET /api/todos ----
// Returns all todos. Supports optional ?completed=true|false filter.
export async function GET(request: NextRequest): Promise<NextResponse<Todo[]>> {
  const completedParam = request.nextUrl.searchParams.get("completed");

  if (completedParam === null) {
    return NextResponse.json(todos);
  }

  const completed = completedParam === "true";
  const filtered = todos.filter((todo) => todo.completed === completed);

  return NextResponse.json(filtered);
}

// ---- POST /api/todos ----
// Body: { title: string }
// Creates a new todo and returns it.
export async function POST(
  request: NextRequest
): Promise<NextResponse<Todo | { error: string }>> {
  let body: CreateTodoBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    return NextResponse.json(
      { error: "'title' is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);

  return NextResponse.json(newTodo, { status: 201 });
}