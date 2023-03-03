import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const [enteredString, setEnteredString] = useState("")
    const [error, setError] = useState()

    //! Função que vai ser executada quando algo for escrito no input
    const stringChangeHandler = (event) => {
        setEnteredString(event.target.value)
    }

    //! Função que vai ser executada após o botão ser clickado
    const stringAddHandler = (event) => {
        event.preventDefault()
        if (enteredString.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter a valid string'
            })
            return
        }

        //? invocou o Callback 
        props.onAddUser(enteredString)

        console.log(enteredString)
        setEnteredString("")
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={stringAddHandler}>
                    <label htmlFor='username' >To Do List</label>
                    <input id='username' type="text" onChange={stringChangeHandler} value={enteredString} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
