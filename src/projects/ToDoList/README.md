# To-Do List
A responsive and fully interactive to-do list application built with React, TypeScript, and Tailwind CSS. The app enables users to manage tasks efficiently by adding, reordering, editing, completing, and deleting tasks, with persistent storage handled via the browser’s `localStorage`.

## Features
- Add tasks with automatic date and time stamping
- Separate **Pending** and **Completed** task tabs
- Persistent task storage using `localStorage`
- Reorder pending tasks (Move Up / Move Down)
- Mark tasks as complete
- Edit task names
- Delete tasks with confirmation prompts
- Dedicated task management view for cleaner UX
- Responsive layout for mobile, tablet, and desktop

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React | Component-based UI development |
| TypeScript | Type safety and structured state management |
| Tailwind CSS | Styling and responsive design |
| localStorage | Client-side persistent data storage |

## How It Works
1. The user enters a task name and clicks **Add**.
2. A task object is created containing:
   - A unique ID
   - Task name
   - Formatted timestamp
   - Order index for sorting
3. Tasks are stored in the **Pending** list by default and persisted to `localStorage`.
4. Users can:
   - Reorder tasks using **Move Up** and **Move Down**
   - Open task options via the ellipsis menu
5. When a task is marked as complete:
   - It is removed from Pending Tasks
   - Added to Completed Tasks with an updated timestamp
6. All changes are immediately synced to `localStorage`, ensuring tasks persist after page refresh.

## Screenshots
- Soon

## How to Run
1. Navigate to the project directory:
   ```bash
   cd src/projects/ToDoList
2. Start development server
- `npm run dev`
3. Open the local development URL in your browser

## Future Improvements
- Replace localStorage with IndexedDB or backend-based persistence
- Add task categories or priority levels
- Implement drag-and-drop task reordering
- Add task search and filtering
- Improve accessibility and keyboard navigation