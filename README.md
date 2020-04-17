# ReactReduxTodo

React Redux project 2<br>
It make with immutable react-action and duck structure<br><br>

### immutable
It is important that web application multi connectable.<br>
Data must not be dealed with directly. It make problems when multi users deal with same data.<br><br>
So we deal with state immutalbly useing list function like splice or compehenstion `...`<br><br>

`immutable js` is useful for immutablity.<br>
I use 2 of it, `List` and `Map`<br><br>

`Map` is map structure (key, value).<br>
`.set` `.get` `.setIn` `.getIn` is inside function deal data.<br>
`List` is array structure (list).<br>
`.set` `.set` `.setIn` `.getIn` `.update` `.updateIn` is inside deal data.<br><br>

### react-actions
`react-actions` is module for action and reducer function.<br>
`createAction` make action function. param is action types.<br>
`handleActions` make reducer. each functions set like `[action type] : (state, action) => {}`<br><br>

### duck structure
actionType, action function, reducer are put i one file.<br>
It is one of paradigms


## Struture
```
root
  |---- src
         |---- component
         |---- container
         |---- module  //action, reducer
         |---- style
         |---- index.js
         |---- index.html
  |---- webpack
  |---- package.json
  |---- .babel.rc
```
