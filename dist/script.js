// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

var initialText = "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\nYou can also make text **bold**... whoa!\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";









class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.process = this.process.bind(this);
  }
  process(editor) {
    return /*#__PURE__*/React.createElement(ReactMarkdown, { source: editor });
  }
  render() {
    let output = this.process(this.props.input);
    return /*#__PURE__*/(
      React.createElement("div", { class: "previewWrap" }, /*#__PURE__*/
      React.createElement("div", { class: "toolbar" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-free-code-camp", title: "no-stack-dub-sack" }), "Previewer", /*#__PURE__*/

      React.createElement("i", { class: "fa fa-arrows-alt" })), /*#__PURE__*/

      React.createElement("div", { id: "preview" }, output)));


  }}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialText };

    this.textChange = this.textChange.bind(this);
  }
  textChange(event) {
    this.setState({
      input: event.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app" }, /*#__PURE__*/
      React.createElement("div", { class: "editorWrap" }, /*#__PURE__*/
      React.createElement("div", { class: "toolbar" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-free-code-camp", title: "no-stack-dub-sack" }), "Editor", /*#__PURE__*/

      React.createElement("i", { class: "fa fa-arrows-alt" })), /*#__PURE__*/

      React.createElement("textarea", { id: "editor", type: "text", onChange: this.textChange, value: this.state.input })), /*#__PURE__*/


      React.createElement("div", { class: "converter" }), /*#__PURE__*/
      React.createElement(Previewer, { input: this.state.input })));


  }}



const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));