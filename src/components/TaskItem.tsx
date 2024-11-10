import { useState } from 'react';
import EditTaskForm from './EditTaskForm';
import Modal from './Modal';
import { useTaskStore } from '../pages/store/taskStore';
import { trpc } from '../utils/trpc';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Task } from '../pages/store/taskStore';

type TaskItemProps = {
    task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
    const { deleteTask, updateTask } = useTaskStore();
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [isEditing, setIsEditing] = useState(false);

    // Use the `update` mutation to update task status or other fields
    const updateTaskMutation = trpc.task.update.useMutation({
        onSuccess: (updatedTask: Task) => {
            updateTask(updatedTask); // Update Zustand store with the updated task
        },
    });

    // Use tRPC mutation for deleting a task
    const deleteTaskMutation = trpc.task.delete.useMutation({
        onSuccess: () => {
            deleteTask(task.id); // Remove task from Zustand store
        },
    });

    const toggleCompleted = () => {
        updateTaskMutation.mutate({
            id: task.id,
            completed: !isCompleted,
        }); // Send updated completion status to the server
        setIsCompleted(!isCompleted); // Optimistic UI update
    };

    const handleEditSuccess = (updatedTask: Task) => {
        updateTask(updatedTask); // Update task in Zustand store
        setIsEditing(false); // Close modal on success
    };

    return (
        <Card className={`text-center ${isCompleted ? 'border-success' : 'border-danger'} mb-3`}>
            <Card.Header>Status: {isCompleted ? 'Completed' : 'Not Completed'}</Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description || 'No description available'}</Card.Text>

                <Button onClick={toggleCompleted} variant="success">
                    Mark as {isCompleted ? 'Not Completed' : 'Completed'}
                </Button>
                <Button className="ms-1" onClick={() => setIsEditing(true)} variant="info">Edit</Button>
                <Button className="ms-1" onClick={() => deleteTaskMutation.mutate({ id: task.id })} variant="danger">Delete</Button>

            </Card.Body>
            <Card.Footer className="text-muted">
                Created At: {new Date(task.createdAt).toLocaleString()} | Updated At: {new Date(task.updatedAt).toLocaleString()}
            </Card.Footer>
            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
                <h3 className="mt-3">Edit Task</h3>
                <EditTaskForm
                    taskId={task.id}
                    initialTitle={task.title}
                    initialDescription={task.description}
                    initialCompleted={isCompleted}
                    onClose={() => setIsEditing(false)}
                    onSuccess={handleEditSuccess}
                />
            </Modal>
        </Card>
    );
};

export default TaskItem;
