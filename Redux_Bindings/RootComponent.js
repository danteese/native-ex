import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
    todos: state.todos,
})

class RootComponent extends React.Component {

    onAddTodo = (text) => {
        const {dispatch} = this.props

        dispatch(actionCreators.add(text))
    }

    onRemoveTodo = (index) => {
        const {dispatch} = this.props 

        dispatch(actionCreators.remove(index))
    }

    render() {
        const {todos} = this.props

        return (
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input 
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}>
                </Input>
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                >
                </List>
            </View>
        )
    }
}

export default connect(mapStateToProps)(RootComponent)

