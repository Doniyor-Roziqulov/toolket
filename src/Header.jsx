import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const users = useSelector((s) => s.users.value);
    return (
        <div className="header">
            <Link className="header-link" to={"/"}>
                Create users
            </Link>
            <Link className="header-link" to={"/cart"}>
                All users{" "}
                {users.length !== 0 ? (
                    <sup className="sup">{users.length}</sup>
                ) : (
                    <></>
                )}
            </Link>
        </div>
    );
};

export default Header;
