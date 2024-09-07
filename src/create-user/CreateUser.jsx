import React, { useState } from "react";
import "./CreateUser.css";

function CreateUser() {
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: new Date().getTime(),
            name,
            profession,
            age: +age,
            gender,
        };
        console.log(newUser);
    };
    return (
        <div className="create__user">
            <h2>Create User</h2>
            <form
                onSubmit={handleSubmit}
                className="create__user-form"
                action="">
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
                />
                <input
                    required
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    type="text"
                    placeholder="profession"
                />
                <input
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder="age"
                />
                <select
                    className="w-full"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    name=""
                    id="">
                    <option value="">gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">Create</button>
            </form>
            <div></div>
        </div>
    );
}

export default CreateUser;
