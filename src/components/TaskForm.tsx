import { useState } from 'react';
import { trpc } from '../utils/trpc';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTaskStore } from '../pages/store/taskStore'; // Import the task store

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
    const addTask = useTaskStore((state) => state.addTask); // Access addTask from the store

    const createTask = trpc.task.create.useMutation({
        onSuccess: (newTask) => {
            console.log("Success creating task:", newTask);
            addTask(newTask); // Add the new task to the store directly
            console.log("Added new task to task store after creation");
            //router.refresh();
            router.replace('/'); // Navigate back to the task list
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createTask.mutate({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default TaskForm;
