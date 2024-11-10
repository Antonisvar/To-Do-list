import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container className="mb-5 mt-3">
            <Row>
                <h1 className="mb-3 mt-3">Task Manager</h1>
                <Col>
                    <TaskForm />
                </Col>
                <Col md={8}>
                    <TaskList />
                </Col>
            </Row>
        </Container >
    );
};

export default Home;
