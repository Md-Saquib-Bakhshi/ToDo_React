import { useEffect } from "react";
import del from "../components/delete.png";

const TodoListItem = (props) => {
  const todo = props.todo;
  const index = props.index;
  const { onDelete } = props;

  useEffect(() => {
    console.log("Ready TODO List Item");
  }, []);

  return (
    <>
      <li className="list-group-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11">
              <div className="float-left text-dark">
                {index + 1}. {todo}
              </div>
            </div>
            <div className="col-1">
              <img
                onClick={onDelete}
                className="hand float-right"
                src={del}
                height="20px"
                alt="Delete"
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export { TodoListItem };
