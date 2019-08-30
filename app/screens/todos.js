import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    Container,
    Header,
    Title,
    Content,
    Body,
    List,
    ListItem,
    Text,
    Spinner,
    Fab,
    Icon,
    CheckBox
} from "native-base";
import actions from "../actions/todo";

export default connect(state => ({ todo: state.todo }))(props => {
    useEffect(() => {
        props.dispatch(actions.loading());

        setTimeout(() => {
            props.dispatch(
                actions.set([
                    {
                        id: 1,
                        text: "Create a new repo",
                        completed: true
                    },
                    {
                        id: 2,
                        text: "Setup unit test",
                        completed: false
                    }
                ])
            );
            props.dispatch(actions.loading());
        }, 2000);
    }, []);

    return (
        <Container>
            <Header>
                <Body>
                    <Title>To-do</Title>
                </Body>
            </Header>
            <Content>
                {props.todo.loading ? (
                    <Spinner />
                ) : (
                    <List>
                        {props.todo.todos.map(todo => (
                            <ListItem
                                key={todo.id}
                                onPress={() => {
                                    props.navigation.navigate("detail", {
                                        todo
                                    });
                                }}
                            >
                                <CheckBox
                                    checked={todo.completed}
                                    onPress={() =>
                                        props.dispatch(
                                            actions.complete(todo.id)
                                        )
                                    }
                                />
                                <Body>
                                    <Text
                                        style={{
                                            textDecorationLine: todo.completed
                                                ? "line-through"
                                                : "none"
                                        }}
                                    >
                                        {todo.text}
                                    </Text>
                                </Body>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Content>
            <Fab
                style={{ backgroundColor: "#5067FF" }}
                position="bottomRight"
                onPress={() => props.navigation.navigate("add")}
            >
                <Icon name="add" />
            </Fab>
        </Container>
    );
});
