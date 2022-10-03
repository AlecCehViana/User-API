import React from "react";

const userItem = ({ users, deleteUser, selectUser }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="users-list li h3">
            <h5>
              <b>Name: </b>
              {user.first_name} {user.last_name}
            </h5>
            <p>
              <b>Email: </b>
              {user.email}
            </p>

            <p>
              <b>Password: </b>
              {user.password}
            </p>
            <p>
              <b>Birthday: </b>
              {user.birthday}
            </p>

            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => selectUser(user)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default userItem;
