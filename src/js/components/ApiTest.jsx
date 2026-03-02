import React from "react";

const ApiTest = () => {

    function getTasks() {
        fetch("https://playground.4geeks.com/todo/users/LuisDudu")
            .then((response) => response.json())
            .then((data) => console.log(data))

    }
    function postTasks() {
        // console.log("funciona?")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ label:'andar' })
        }
        fetch("https://playground.4geeks.com/todo/todos/LuisDudu", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    function deleteTask(){
        fetch("https://playground.4geeks.com/todo/todos/48", { method: 'DELETE' })
        .then((data) => console.log(data))
    }

return (
    <>
        <h1>Crearemos aqui el listado de botones para accionar</h1>

        <button onClick={getTasks}>Get</button>
        <button onClick={postTasks}>Post</button>
        <button onClick={deleteTask}>Delete</button>
    </>
)
}


export default ApiTest