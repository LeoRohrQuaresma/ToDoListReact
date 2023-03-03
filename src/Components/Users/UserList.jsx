import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
import Button from '../UI/Button';

const UserList = (props) => {

    return (
        <div>
            <Card className={classes.users}>
                <ul>
                    {props.users.map((user) => (
                        <li key={user.id}>
                            {user.name}{" "}
                            <Button onClick={() => props.handleDelete(user.id)}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default UserList;