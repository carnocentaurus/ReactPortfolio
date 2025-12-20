// ToDoList.tsx

import {useState, useEffect, type FC, type ChangeEvent} from "react";

interface Task {
  id: string;
  name: string;
  date: string;
  order: number;
}


const ToDoList: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("PendingTasksTab");

    const [taskInput, setTaskInput] = useState<string>("");
    const [pendingTasks, setPendingTasks] = useState<Task[]>([]); // array of Task objects
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [showManageTaskDiv, setShowManageTaskDiv] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    

    useEffect(() => {
        const savedPendingTasks: string | null = localStorage.getItem("PendingTasks");
        const savedCompletedTasks: string | null = localStorage.getItem("CompletedTasks");

        if (savedPendingTasks) {
            setPendingTasks(JSON.parse(savedPendingTasks));
        }
        if (savedCompletedTasks) {
            setCompletedTasks(JSON.parse(savedCompletedTasks));
        }
    }, []);


    function getAndFormatDate(): string {
        const now: Date = new Date();

        let currentDate: number | string = now.getDate();
        const currentMonth: number = now.getMonth();
        const currentYear: number = now.getFullYear();

        currentDate = currentDate < 10 ? "0" + currentDate : currentDate;

        let hours: string | number = now.getHours();
        let minutes: number | string = now.getMinutes();
        const meridiem: string = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        const formattedTime: string = `${hours}:${minutes} ${meridiem}`;

        const abbrMonthNames: string[] = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        return `${currentDate} ${abbrMonthNames[currentMonth]} ${currentYear} • ${formattedTime}`;
    }


    function addTask(): void {
        if (!taskInput.trim()) {
            alert("Enter task name");
            return;
        }

        /* 
           pendingTasks.length > 0 - Check if there are any tasks
           pendingTasks.map(t => t.order) - Get array of all order numbers: [0, 1, 2, 3]
           ... - Spread operator, unpacks array: Math.max(0, 1, 2, 3)
           Math.max(...) - Finds highest order number
           : -1 - If no tasks exist, use -1, so first task becomes 0 
        */
        const maxOrder = pendingTasks.length > 0 
            ? Math.max(...pendingTasks.map(t => t.order))
            : -1;

        /*
        Date.now() - Current timestamp: 1734393600000
        Math.random() - Random number: 0.123456789
        Creates unique ID like: task_1734393600000_0.123456789
        */
        const newTask: Task = {
            id: `task_${Date.now()}_${Math.random()}`,
            name: taskInput.trim(),
            date: getAndFormatDate(),
            order: maxOrder + 1
        };

        const updatedPendingTasks = [...pendingTasks, newTask];
        setPendingTasks(updatedPendingTasks);
        localStorage.setItem("PendingTasks", JSON.stringify(updatedPendingTasks));

        setTaskInput("");
    }
    

    function moveTaskUp(task: Task): void {
        const index = pendingTasks.findIndex(t => t.id === task.id);
        if (index === 0) return;

        const newTasks = [...pendingTasks]; // reates a copy of the array
        const prevTask = newTasks[index - 1];
        
        const tempOrder = newTasks[index].order; // save current order
        newTasks[index].order = prevTask.order; // give current task the previous task's order
        prevTask.order = tempOrder; // Give previous task the saved order

        newTasks.sort((a, b) => a.order - b.order); // sort by number

        setPendingTasks(newTasks);
        localStorage.setItem("PendingTasks", JSON.stringify(newTasks));
    }
    

    function moveTaskDown(task: Task): void {
        const index = pendingTasks.findIndex(t => t.id === task.id);
        if (index === pendingTasks.length - 1) return;

        const newTasks = [...pendingTasks];
        const nextTask = newTasks[index + 1];
        
        const tempOrder = newTasks[index].order;
        newTasks[index].order = nextTask.order;
        nextTask.order = tempOrder;

        newTasks.sort((a, b) => a.order - b.order);

        setPendingTasks(newTasks);
        localStorage.setItem("PendingTasks", JSON.stringify(newTasks));
    }
    

    function markAsComplete(task: Task): void {
        const confirmComplete: boolean = confirm(`Move ${task.name} to completed tasks?`);

        if (confirmComplete) {
            alert(`"${task.name}" has been moved!`);

            const completedTask: Task = {
                ...task, // copies all properties from task
                date: getAndFormatDate()
            };

            // ...completedTasks - copy all existing completed tasks
            // completedTask - add new task at the end
            const updatedCompletedTasks = [...completedTasks, completedTask];
            setCompletedTasks(updatedCompletedTasks);
            localStorage.setItem("CompletedTasks", JSON.stringify(updatedCompletedTasks));

            // keep all tasks except the one we're removing
            const updatedPendingTasks = pendingTasks.filter(t => t.id !== task.id);
            setPendingTasks(updatedPendingTasks);
            localStorage.setItem("PendingTasks", JSON.stringify(updatedPendingTasks));

            setShowManageTaskDiv(false);
        }
    }
   

    function editTask(task: Task): void {
        const newTaskName: string | null = prompt("Enter new task name:", task.name);

        // check name exists and isn't just whitespace
        if (newTaskName && newTaskName.trim()) {
            /*
            t.id === task.id - If this is the task we're editing...
            ? { ...t, name: newTaskName.trim() } - Return copy with new name
            : t - Otherwise return task unchanged
            */
            const updatedTasks = pendingTasks.map(t => 
                t.id === task.id ? { ...t, name: newTaskName.trim() } : t
            );

            setPendingTasks(updatedTasks);
            localStorage.setItem("PendingTasks", JSON.stringify(updatedTasks));
            // update selected task with new name
            setSelectedTask({ ...task, name: newTaskName.trim() });
        }
    }
    

    function deleteTask(task: Task, isCompleted: boolean = false): void {
        const confirmDelete: boolean = confirm(
            `Permanently delete "${task.name}"? This action is irreversible.`
        );

        if (confirmDelete) {
            if (isCompleted) {
                const updatedTasks = completedTasks.filter(t => t.id !== task.id);
                setCompletedTasks(updatedTasks);
                localStorage.setItem("CompletedTasks", JSON.stringify(updatedTasks));
            } 
            else {
                const updatedTasks = pendingTasks.filter(t => t.id !== task.id);
                setPendingTasks(updatedTasks);
                localStorage.setItem("PendingTasks", JSON.stringify(updatedTasks));
            }

            setShowManageTaskDiv(false);
        }
    }


    return(
        <main className="
            scrollbar-hide
            bg-[#f4f4f4]
            rounded-2xl
            text-center
            mt-10 sm:mt-20 lg:mt-10
            py-5 sm:py-10 lg:py-5
            px-9 sm:px-12
            w-70 sm:w-115 lg:w-110
            max-w-70 sm:max-w-115
            h-125 sm:h-195
            max-h-125 sm:max-h-200 md:max-h-170 lg:max-h-115
            overflow-y-scroll
        ">



            {/* TABS DIV */}
            <div className={`
                ${!showManageTaskDiv ? "flex" : "hidden"}
                flex 
                justify-evenly 
                font-poppins 
                border sm:border-2
                border-[#333]
                rounded-full
                bg-[#f4f4f4]
                text-[#333]
                mb-5 sm:mb-8 md:mb-5
                text-base sm:text-2xl lg:text-base
            `}>
                <p 
                    onClick={() => setActiveTab("PendingTasksTab")}
                    className={
                        `${activeTab === "PendingTasksTab" ? "bg-[#333] text-[#f4f4f4]" : "bg-[#f4f4f4] text-[#333]"}
                        w-full
                        rounded-full
                        py-0.5 sm:py-1.5 lg:py-0.5
                    `}
                >
                  Pending
                </p>
                
                <p 
                    onClick={() => setActiveTab("CompletedTasksTab")}
                    className={`${activeTab === "CompletedTasksTab" ? "bg-[#333] text-[#f4f4f4]" : "bg-[#f4f4f4] text-[#333]"}
                    w-full
                    rounded-full
                    py-0.5 sm:py-1.5 lg:py-0.5
                `}
                >
                  Complete
                </p>
            </div>

            
            {/* PENDING TASKS DIV */}
            <div className={`${activeTab === "PendingTasksTab" && !showManageTaskDiv ? "block" : "hidden"}`}>
                <div className="flex justify-center">
                    <input
                        value={taskInput}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setTaskInput(event.target.value)}
                        className="
                            font-poppins
                            text-sm sm:text-2xl lg:text-sm
                            text-[#333]
                            border sm:border-3 lg:border-2
                          border-[#333]
                            mb-3
                            w-full
                            py-[0.2rem] sm:py-2 lg:py-1
                            px-2 sm:px-3 lg:px-2
                            placeholder:text-sm sm:placeholder:text-2xl lg:placeholder:text-sm
                            placeholder:text-[#666]
                        "
                        placeholder="Enter Task"
                    />
                    <button 
                        onClick={addTask}
                        className="
                            bg-[#333] 
                          text-[#f4f4f4] 
                            font-poppins 
                            hover:opacity-80
                            mb-3
                            text-sm sm:text-2xl lg:text-sm
                            px-2 sm:px-3
                        "
                    >
                        Add
                    </button>
                </div>

                {/* PENDING TASKS DISPLAY */}
                <ul className="flex flex-col gap-3">
                    {pendingTasks.map((task) => (
                        <li 
                            key={task.id} 
                            className="
                                flex 
                                flex-col 
                                font-poppins 
                                text-left 
                                bg-[#333] 
                              text-[#f4f4f4]
                                hover:opacity-90
                                rounded-sm sm:rounded-lg
                                w-full
                                px-2 sm:px-4 lg:px-3
                                py-2 sm:py-4 lg:py-3
                                gap-1 lg:gap-0
                                sm:mt-2 lg:mt-1
                            "
                        >
                            {/* TASK NAME/ELLIPSIS ICON NESTED DIV */}
                            <div className="flex justify-between">
                                <span className="text-base sm:text-2xl lg:text-base">{task.name}</span>

                                <span 
                                    onClick={() => {
                                        setSelectedTask(task);
                                        setShowManageTaskDiv(true);
                                    }}
                                    className="text-[#f4f4f4] text-base sm:text-3xl lg:text-lg cursor-pointer"
                                >
                                    &#8942;
                                </span>
                            </div>

                            <span className="text-[0.7rem] sm:text-lg lg:text-[0.7rem]">{task.date}</span>

                            {/* MOVE UP/DOWN BUTTONS NESTED DIV */}
                            <div className="flex justify-center gap-2">
                                <button 
                                    onClick={() => moveTaskUp(task)}
                                    className="
                                      bg-[#f4f4f4] 
                                      text-[#333] 
                                        w-full
                                        hover:bg-[#cfcfcf]
                                        rounded-[0.1rem] sm:rounded-sm lg:rounded-[0.1rem]
                                        text-sm sm:text-lg lg:text-sm
                                        py-0.5 sm:py-1 lg:py-0.5
                                    "
                                >
                                    Move Up
                                </button>

                                <button 
                                    onClick={() => moveTaskDown(task)}
                                    className="
                                        bg-[#f4f4f4] 
                                        text-[#333] 
                                        w-full
                                        hover:bg-[#cfcfcf]
                                        rounded-[0.1rem] sm:rounded-sm lg:rounded-[0.1rem]
                                        text-sm sm:text-lg lg:text-sm
                                        py-0.5 sm:py-1 lg:py-0.5
                                    "
                                >
                                    Move Down
                                 </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


            {/* MANAGE TASK DIV */}
            <div className={showManageTaskDiv ? "block" : "hidden"}>
                {selectedTask && (
                    <>
                        <p 
                            onClick={() => setShowManageTaskDiv(false)}
                            className="
                                text-right
                                cursor-pointer
                                text-3xl sm:text-5xl lg:text-3xl
                                mb-5 sm:mb-10 lg:mb-5
                            "
                        >
                            &times;
                        </p>

                        <p className="
                                font-poppins
                                font-semibold
                                italic
                                text-lg sm:text-3xl lg:text-lg
                                mb-5 sm:mb-10 lg:mb-5
                            "
                        >
                            {selectedTask.name}
                        </p>

                        {/* MANAGE TASK OPTIONS NESTED DIV */}
                        <div className="
                                 flex 
                                 flex-col
                                 font-poppins
                                 gap-1 sm:gap-2 lg:gap-1
                             "
                        >
                            {pendingTasks.some(t => t.id === selectedTask.id) && (
                                <>
                                    <button 
                                        onClick={() => markAsComplete(selectedTask)}
                                        className="
                                            bg-[#333] 
                                            text-[#f4f4f4] 
                                            hover:opacity-80
                                            text-sm sm:text-2xl lg:text-sm
                                            rounded-[0.1rem] sm:rounded-sm
                                            py-1 sm:py-2 lg:py-1
                                        "
                                    >
                                        Mark as Complete
                                    </button>
                                    <button 
                                        onClick={() => editTask(selectedTask)}
                                        className="
                                            bg-[#333] 
                                            text-[#f4f4f4] 
                                            hover:opacity-80
                                            text-sm sm:text-2xl lg:text-sm
                                            rounded-[0.1rem] sm:rounded-sm
                                            py-1  sm:py-2 lg:py-1
                                        "
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                            <button 
                                onClick={() => deleteTask(selectedTask, completedTasks.some(t => t.id === selectedTask.id))}
                                className="
                                    bg-[#333] 
                                    text-[#f4f4f4] 
                                    hover:opacity-80
                                    text-sm sm:text-2xl lg:text-sm
                                    rounded-[0.1rem] sm:rounded-sm
                                    py-1 sm:py-2 lg:py-1
                                "
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>


            {/* COMPLETED TASK DIV */}
            <div className={showManageTaskDiv || activeTab !== "CompletedTasksTab" ? "hidden" : "block"}>
                <ul className="flex flex-col gap-2">
                    {completedTasks.map((task) => (
                        <li 
                            key={task.id}
                            className="
                                flex 
                                flex-col 
                                font-poppins 
                                text-left 
                                bg-[#333] 
                              text-[#f4f4f4]
                                rounded-sm sm:rounded-lg lg:rounded-sm
                                px-2 sm:px-4 lg:px-3
                                py-2 sm:py-4 lg:py-3
                                gap-1 lg:gap-0
                                sm:mt-2 lg:mt-1
                            "
                            onClick={() => {
                                setSelectedTask(task);
                                setShowManageTaskDiv(true);
                            }}
                        >
                            <span className="text-base sm:text-2xl lg:text-base">{task.name}</span>
                            <span className="text-[0.7rem] sm:text-lg lg:text-[0.7rem]">{task.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}


export default ToDoList;