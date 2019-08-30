import { createAppContainer, createStackNavigator } from "react-navigation";
import Todos from "../screens/todos";
import TodoDetail from "../screens/todo-detail";
import TodoAdd from "../screens/todo-add";

const Root = createStackNavigator(
    {
        todos: {
            screen: Todos
        },
        detail: {
            screen: TodoDetail
        },
        add: {
            screen: TodoAdd
        }
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(Root);
