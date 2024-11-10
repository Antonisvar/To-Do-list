import { useState, useEffect } from 'react';
import { trpc } from '../utils/trpc';
import TaskItem from './TaskItem';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useTaskStore } from '../pages/store/taskStore';
import { Task } from '../pages/store/taskStore';

const TaskList = () => {
    const { data: fetchedTasks, isLoading } = trpc.task.getAll.useQuery(); // Fetch tasks from the server
    const { tasks, setTasks } = useTaskStore(); // Zustand store
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedTasks, setSearchedTasks] = useState<Task[]>([]);

    // Load tasks into Zustand store on first load
    useEffect(() => {
        if (fetchedTasks) {
            setTasks(fetchedTasks);
        }
    }, [fetchedTasks, setTasks]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const foundTasks = tasks.filter(
            (task) =>
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setSearchedTasks(foundTasks);
    };

    const handleClear = () => {
        setSearchTerm('');
        setSearchedTasks([]);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h3 className="mb-3">Search Task</h3>
            <Form onSubmit={handleSearch} className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search tasks by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-3"
                />
                <div className="mt-2 mb-5">
                    <Button variant="primary" type="submit" className="me-2">
                        Search
                    </Button>
                    <Button variant="secondary" type="button" onClick={handleClear}>
                        Clear
                    </Button>
                </div>
            </Form>

            <ListGroup>
                {/* Display all matched tasks at the top */}
                {searchedTasks.map((task) => (
                    <ListGroup.Item key={task.id} variant="info">
                        <TaskItem task={task} />
                    </ListGroup.Item>
                ))}

                {/* Display the rest of the tasks, excluding the searched tasks */}
                {tasks
                    .filter((task) => !searchedTasks.some((searchedTask) => searchedTask.id === task.id))
                    .map((task) => (
                        <ListGroup.Item key={task.id}>
                            <TaskItem task={task} />
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </div>
    );
};

export default TaskList;
