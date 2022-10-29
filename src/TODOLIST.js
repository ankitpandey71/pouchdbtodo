import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

// eslint-disable-next-line react/prop-types
const TODOList = ({ itemsList = [], getToDBFun }) => (
  <div>
    <ul className="ml-5">
      {itemsList.map((itemvalue, index) => (
        <TodoListItem
          task={itemvalue.doc.task}
          taskId={itemvalue.id}
          key={itemvalue.id}
          getToDBFun={getToDBFun}
          todoIndex={index}
        />
      ))}
    </ul>
  </div>
);

export default TODOList;

TodoListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemsList: PropTypes.array.isRequired,
  getToDBFun: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
  itemsList: [],
  getToDBFun: () => {},
};
