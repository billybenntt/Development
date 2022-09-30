# React Notes App

### Basic Steps

> - `JSX` Create an editor and Sidebar Component
> - `JSX` The Sidebar component manages and creates new notes
> - `JSX` The Editor component renders the editor which is imported from `showdown` and utilizes a converter
> - `JSX` The App Component has functions to create/update/find new notes that are inserted into the Sidebar Component
> - `JSON` the  data.js contains data that is passed into the notes state and initializes the application with basic notes data.

### Task List

- [x] Sync notes with LocalStorage (useEffect)

- [ ] Add note Summary Title instead of (Note + Index), take first line of note body

- [ ] Move Modified notes to the top of the list

- [ ] Delete notes

### Dependencies

- `showdown` Renders Markdown as React Component

- `react-split` has a `<Split />` component that wraps multiple children components to create a resizeable split view

- `nanoid` Generates unique IDs for each note

### Hooks and Functions

`React.UseState()`

`React.useEffect()`

### Local Storage Sync

- Local Storage is a two step process, when setting the data it must be saved into string `JSON.stringify`, when retrieving the data it must be parsed from using `JSON.parse`

- Since it is an external action it we need to implement `UseEffect()` and everytime notes are changed we call useEffect hence the notes dependency. 

```js
  const [notes, setNotes] = 
  React.useState(JSON.parse(localStorage.getItem("notes"))||[]);


  React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]
```

[Reference](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/)

### Summary Title
