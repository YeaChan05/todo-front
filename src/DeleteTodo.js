import React from "react";
import { DeleteOutlined } from "@material-ui/icons";

class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.deleteForCompleted = props.deleteForCompleted;
    }

    deleteForCompleted = () => {
        this.deleteForCompleted();
    }

    render() {
        return (
            <div>
                Delete Complited Item
                <DeleteOutlined
                    onClick={this.deleteForCompleted}
                />
            </div>
        )
    }
}

export default DeleteTodo;