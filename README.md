# Exercises

Took from [ReactNativeExpress](reactnativeexpress.com) 

Execute with `npm start`.

Initial code: (React Hooks)

```JSX
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Second example 

In this exercise we created two components one is used inside the other. More about [_isMounted](https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component)

```JSX
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Counter extends Component {

  _isMounted = false;

  state = {count: 0}

  componentDidMount() {
    this._isMounted = true;

    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000);
  }

  render() {
    const {count} = this.state
    const {color, size, borderColor, borderWidth} = this.props

    return (
      <Text style={{ color, fontSize: size, borderWidth: borderWidth, borderColor: borderColor }}>
        {count}
      </Text>
    )
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} borderColor={styles.counter.borderColor} borderWidth={styles.counter.borderWidth} size={16}></Counter>
        <Counter color={'skyblue'}  borderColor={styles.counter.borderColor} borderWidth={styles.counter.borderWidth} size={32}></Counter>
        <Counter color={'steelblue'}  borderColor={styles.counter.borderColor} borderWidth={styles.counter.borderWidth} size={80}></Counter>
        <Counter color={'darkblue'}  borderColor={styles.counter.borderColor} borderWidth={styles.counter.borderWidth} size={140}></Counter>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'green'
  },
  counter: {
    borderWidth: 5,
    borderColor: 'red'
  }
})
```


## Third example

Show minimum component View

```jsx
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20
  }
})
```

## Flex

Toggle.js

```jsx
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Toggle extends Component {


    onPress = (option) => {
        const {onChange} = this.props

        onChange(option)
    }

    renderOption = (option, i) => {
        const {value} = this.props

        return (
            <TouchableOpacity
                style={[styles.option, option === value && styles.activeOption]}
                onPress={this.onPress.bind(this, option)}
                key={i}
            >
                <Text style={styles.text}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {label, options} = this.props

        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.label]}>
                    {label}
                </Text>
                <View style={styles.optionsContainer}>
                    {options.map(this.renderOption)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingBottom: 20,
    },
    text: {
        fontSize: 14,
    },
    label: {
        padding: 4
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    option: {
        padding: 4,
        backgroundColor: 'whitesmoke'
    },
    activeOption: {
        backgroundColor: 'skyblue'
    }
})
```

App.js
```jsx
// Flexbox

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

export default class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}
    
    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        ></Toggle>
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        ></Toggle>
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5
  }
})
```


## Texto 

```jsx
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  }
})
```

## Image 

```jsx
import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'


export default class App extends Component {
  render() {
    return (
      <Image 
      style={styles.image}
      source={{ uri: 'http://www.reactnativeexpress.com/static/logo.png' }}
      ></Image>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})
```

## Scroll View

```jsx
import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge}></View>
        <ScrollView horizontal>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
        </ScrollView>
        <View style={styles.boxLarge}></View>
        <View style={styles.boxSmall}></View>
        <View style={styles.boxLarge}></View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue'
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue'
  }
})
```


## Lists 

```jsx
import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
  { id: 5, text: 'Text' },
  { id: 6, text: 'Image' },
  { id: 7, text: 'ScrollView' },
  { id: 8, text: 'ListView' },
  { id: 9, text: 'Text' },
  { id: 10, text: 'Image' },
  { id: 11, text: 'ScrollView' },
  { id: 12, text: 'ListView' },
  { id: 13, text: 'Text' },
  { id: 14, text: 'Image' },
  { id: 15, text: 'ScrollView' },
  { id: 16, text: 'ListView' },
  { id: 17, text: 'Text' },
  { id: 18, text: 'Image' },
  { id: 19, text: 'ScrollView' },
  { id: 20, text: 'ListView' }
]

const extractKey = ({ id }) => id

export default class App extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={style.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList
        style={style.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      ></FlatList>
    )
  }

}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue'
  }
})
```

## Section Lists 

```jsx
import React, { Component } from 'react'
import { SectionList, Text, StyleSheet } from 'react-native'

const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 2, text: 'Image'},
    ]
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      {id: 3, text: 'ScrollView'},
      {id: 4, text: 'ListView'}
    ]
  }
]

const extractKey = ({id}) => id

export default class App extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      ></SectionList>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue'
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold'
  }
})
```

## State Component

In `State_Component` folder.

## Redux

```jsx
import { Text } from 'react-native'
import { createStore } from 'redux'


// Define action types
const types = {
    INCREMENT: 'INCREMENT',
}

// Define a reducer 
const reducer = (state, action) => {
    if (action.type === types.INCREMENT) {
        return {count: state.count + 1}
    }
    return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)


// Redux Ready 

store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

export default function App() {
    return (
        <Text>
            {store.getState().count}
        </Text>
    )
}
```


## Redux Big Example

The code is created from scratch, not using the React Bindings `Redux_Example`.

## Redux with Bindings 

Code in: `Redux_Bindings`. This example required extra work of finding the issues related with Expo and store 

1. export the [connected()](https://stackoverflow.com/questions/41892553/could-not-find-store-in-either-the-context-or-props-of-connectapp)
2. Using [index.js instead of App.js](https://stackoverflow.com/questions/49431013/react-native-app-js-index-js)