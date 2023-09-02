import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [mode, setMode] = useState("")

    useEffect(() => {
        GetUsers()
    }, [])

    const GetUsers = () => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res?.data)
                localStorage.setItem("users", JSON.stringify(res.data))
            }).catch(err => {
                console.log(err)
                setMode('offline')
                let coll = localStorage.getItem("users")
                setUsers(JSON.parse(coll))
            })
        setLoading(false)
    }

    return (
        <div className="container my-3">
            <div className="alert alert-danger">{mode === 'offline' ? "You are offline" : "You are online"}</div>
            <div className="row">
                {users?.map((user, i) => (
                    <div className="col-md-4 col-sm-12 my-1 mx-1" key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{user.email}</ListGroup.Item>
                                    <ListGroup.Item>{user.phone}</ListGroup.Item>
                                    <ListGroup.Item>{user.address.street}</ListGroup.Item>
                                </ListGroup>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users