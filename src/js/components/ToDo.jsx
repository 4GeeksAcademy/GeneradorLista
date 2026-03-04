import React, { useEffect, useState } from "react";

const ToDo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        getItems()
    }, [])

    //  Esto agrega un item a la lista al presionar enter
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            agregarItem();
        }
    };

    // Conección con la api para colocar tareas
    function agregarItem() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ label: (input) })
        }
        fetch("https://playground.4geeks.com/todo/todos/LuisDudu", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data), getItems())
        setInput("");
    }

    function eliminarItem(id) {
        console.log(id)
        fetch(`https://playground.4geeks.com/todo/todos/` + id, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    console.log(`Item ${id} deleted successfully`)
                    getItems();
                } else {
                    console.error(`Failed to delete item ${id}`);
                }
            })
            .catch(error => console.error('Error:', error));

    }

    function getItems() {
        
        fetch('https://playground.4geeks.com/todo/users/LuisDudu', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
            
            .then(response =>{
                return response.json()
            })

            .then((data) => {
                console.log(data),
                setList(data.todos)
            })
            
        }



    return (
        <div className="container mx-auto mt-5">
            <input className="form-control" type="text" onKeyDown={pressEnter}
                value={input} onChange={(e) => setInput(e.target.value)} />

            <ul className="list-group mt-3">
                {list.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.label}
                        <button className="btn btn-sm text-grey" onClick={() => eliminarItem(item.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;