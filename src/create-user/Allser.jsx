import React from "react";
import { useSelector } from "react-redux";
import "./User.css";
import male from "../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../assets/female-avatar-girl-face-woman-user-2.svg";

const Allser = () => {
    let users = useSelector((state) => state.users.value);
    console.log(users);

    return (
        <div className="users__wrapper">
            {users?.map((user) => (
                <div key={user.id}>
                    <div className="users__card">
                        <img
                            src={user.gender === "male" ? male : female}
                            alt=""
                        />

                        <h2>{user.name}</h2>
                        <p>{user.profession}</p>
                        <p>{user.age} years old</p>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Allser;
