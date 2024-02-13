import React from 'react'
import {useState} from 'react'

const TaskList= (props) => {
    console.log("🚀 ~ TaskList ~ props:", props)
    // const [check, setCheck] = useState(false);
  
    return (
    <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Task Name</th>
              <th>Complete</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {props.List.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <input type="checkbox" checked={item.completed}  ></input>
                </td>
                <td>
                  <button
                    className="remove"
                    onClick={() => props.deleteBtn(index)}
                    disabled={!check}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
  
}

export default TaskList;