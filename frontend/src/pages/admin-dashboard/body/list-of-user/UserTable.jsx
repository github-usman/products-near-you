import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserTable = ({ data, isOpen }) => {
  console.log(data);
  return (
    <div className={`${isOpen === true ? 'user__table' : 'table_hide'}`}>
      <table>
        <tr className="t-head">
          <th className="first">Avatar</th>
          <th>Name</th>
          <th>Email Name</th>
          <th>Role Name</th>
          <th className="last">Created At</th>
        </tr>
        <tr>
          {data.map((user) => (
            <div key={user._id} className="t-body">
              <td>
                <FaUser />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.createdAt}</td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default UserTable;
