import { trpc } from '../utils/trpc';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTaskStore } from '../pages/store/taskStore';

type EditTaskFormProps = {
    taskId: number;
    initialTitle: string;
    initialDescription: string | null;
    initialCompleted: boolean;
    onClose: () => void;
    onSuccess: (updatedTask: Task) => void;
};

type Task = {
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
};

const EditTaskForm = ({
    taskId,
    initialTitle,
    initialDescription,
    initialCompleted,
    onClose,
    onSuccess,
}: EditTaskFormProps) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription || '');
    const updateTask = useTaskStore((state) => state.updateTask); // Zustand's updateTask

    const updateTaskMutation = trpc.task.update.useMutation({
        onSuccess: (updatedTask) => {
            console.log("Task updated via EditTaskForm:", updatedTask);
            updateTask(updatedTask); // Update Zustand store with the updated task
            onSuccess(updatedTask); // Call the onSuccess handler to update local state
            onClose(); // Close the modal on success
        },
        onError: (error) => {
            console.error("Error updating task:", error);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting task update for task id:", taskId);
        updateTaskMutation.mutate({
            id: taskId,
            title,
            description: description.trim() === '' ? "No available description" : description,
            completed: initialCompleted,
        });
    };

    return (
        <Form className="mb-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Task Title"
                />
            </Form.Group>

            <Form.Group className="mb-3 w-50 m-auto" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Change Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                />
            </Form.Group>

            <Button className="mx-1" variant="warning" type="submit">
                Update Task
            </Button>
            <Button className="mx-1" variant="secondary" type="button" onClick={onClose}>
                Close
            </Button>
        </Form>
    );
};

export default EditTaskForm;
