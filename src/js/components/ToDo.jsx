import React, { useState } from "react";

const ToDo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    

    const pressEnter = (event) => {
        if (event.key === "Enter") {
            agregarItem();
        }
    };

     function agregarItem() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ label:(input) })
        }
        fetch("https://playground.4geeks.com/todo/todos/LuisDudu", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))

        if (input.trim() === "") return;
        setList([...list, { id: Date.now(), text: input }]);
        setInput("");
    }

    function eliminarItem(id) {
        // no se como borrar lo creado ya que tiene un número de id al final del URL, necesito integrar una 
        // variable en esa URL para que reconozca los cambios?


        fetch(`https://playground.4geeks.com/todo/todos/{id}`, { method: 'DELETE' })
        .then((data) => console.log(data))

        setList(list.filter(item => item.id !== id));
    }

    return (
        <div className="container mx-auto mt-5">
            <input className="form-control" type="text" onKeyDown={pressEnter} 
            value={input} onChange={(e) => setInput(e.target.value)}/>

            <ul className="list-group mt-3">
                {list.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.text}
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