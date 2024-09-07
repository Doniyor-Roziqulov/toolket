import React from "react";
import { useSelector } from "react-redux";

const Allser = () => {
    let users = useSelector((state) => state.users.value);
    console.log(users);

    return (
        <div>
            {users?.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Allser;
