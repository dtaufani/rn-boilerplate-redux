import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Container,
    Header,
    Body,
    Left,
    Right,
    Title,
    Content,
    Form,
    Item,
    Input,
    Label,
    Text,
    Button,
    Icon
} from "native-base";
import actions from "../actions/todo";

export default connect(state => ({ todo: state.todo }))(props => {
    const [todo, set] = useState({});

    function submit() {
        if (todo.text) {
            props.dispatch(actions.add(todo.text));
            props.navigation.goBack();
        }
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
                <Right />
            </Header>
            <Content padder>
                <Form>
                    <Item floatingLabel>
                        <Label>To-do</Label>
                        <Input
                            onChangeText={text => set({ text })}
                            value={todo.title}
                            autoFocus
                        />
                    </Item>
                    <Button
                        block
                        onPress={() => submit()}
                        style={{ marginTop: 16 }}
                    >
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
});
