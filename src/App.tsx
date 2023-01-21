import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react"
import { ITask } from "./Interface"
import TodoTask from "./Components/TodoTask"
import reactLogo from "./assets/react.svg"
import "./App.css"

const App: React.FC = () => {
	// const [count, setCount] = useState(0)
	const [task, setTask] = useState<string>("")
	const [deadline, setDeadline] = useState<number>(0)
	const [todo, setTodo] = useState<ITask[]>([])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "task") {
			setTask(e.target.value)
		} else if (e.target.name === "deadline") {
			setDeadline(Number(e.target.value))
		}
	}

	const addTask = () => {
		const newTask = {
			taskName: task,
			deadline: deadline,
		}
		setTodo([...todo, newTask])
		setTask("")
		setDeadline(0)
    console.log(todo)
	}
	const completeTask = (taskNameToDelete: string) => {
		setTodo(
			todo.filter((task) => {
				return task.taskName != taskNameToDelete
			})
		)
	}

	return (
		<div className="App">
			<div className="header">
				<div className="inputContainer">
					<input
						type="text"
						name="task"
						placeholder="Add a todo"
						onChange={handleChange}
					/>
					<input
						type="number"
						name="deadline"
						placeholder="Set a deadline"
						onChange={handleChange}
					/>
				</div>
				<button onClick={addTask}>Add</button>
			</div>
			<div className="todoList">
				{todo.map((task:ITask, key:number) => {
					return <TodoTask
						key={key}
						task={task}
						completeTask={completeTask}
					/>
				})}
 
			</div>
		</div>
	)
}

export default App
