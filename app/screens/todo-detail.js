import React from "react";
import { connect } from "react-redux";
import {
    Container,
    Header,
    Left,
    Right,
    Title,
    Content,
    Text,
    ListItem,
    Label,
    Body,
    Button,
    Icon
} from "native-base";
import actions from "../actions/todo";

export default connect(state => ({ todo: state.todo }))(props => {
    const { id, text, completed } = props.navigation.state.params.todo;

    function remove() {
        props.dispatch(actions.delete(id));
        props.navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => props.navigation.goBack()}
                    >
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>To-do</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => remove()}>
                        <Icon name="trash" />
                    </Button>
                </Right>
            </Header>
            <Content>
                <ListItem>
                    <Label>To-do</Label>
                    <Body>
                        <Text>{text}</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Label>Status</Label>
                    <Body>
                        {completed ? (
                            <Text style={{ color: "green" }}>Done</Text>
                        ) : (
                            <Text>Undone</Text>
                        )}
                    </Body>
                </ListItem>
            </Content>
        </Container>
    );
});
