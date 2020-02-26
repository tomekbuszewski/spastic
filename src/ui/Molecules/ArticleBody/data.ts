export default "One of React’s greatest strengths is the ability to separate the view from the logic. I like to take it a step further and create two separated _components_, one harboring view, and one – logic.\n" +
"\n" +
"On the first sight, this might sound like an overhead. _Why should I create two files, when I can just utilize `render` method._ While true, this approach has many benefits. For starters, it allows two people to work on one thing simultaneously. One, a junior, can write styles and JSX markup, while a more experienced developer can write its logic handling. Another valid point is a separation of concerns – an entire view can be replaced without even touching the files with logic inside, as long as they use the same props. \n" +
"\n" +
"So, how do I approach such thing? Simple, really.\n" +
"\n" +
"First thing is, I define the state. _The component should_ things, like – respond to mouse hover, distinguish its state between active and dormant and display text passed to it. Next, I write the logic. Most often this is a class with some internal methods:\n" +
"\n" +
"```jsx\n" +
"// containers/Thing/index.js\n" +
"\n" +
"import View from \"@src/ui/Thing\";\n" +
"\n" +
"class Thing extends React.Component {\n" +
"  state = {\n" +
"    active: false,\n" +
"    hovered: false,\n" +
"  };\n" +
"  \n" +
"  setActiveState = () => this.setState({ active: !this.state.active });\n" +
"  \n" +
"  setHoveredState = () => this.setState({ hovered: !this.state.hovered });\n" +
"  \n" +
"  render() {\n" +
"    return (\n" +
"      <View\n" +
"        active={this.state.active}\n" +
"        hovered={this.state.hovered}\n" +
"        onClick={this.setActiveState}\n" +
"        onMouseEnter={this.setHoveredState}\n" +
"        onMouseLeave={this.setHoveredState}\n" +
"        text={this.props.text}\n" +
"      />\n" +
"    );\n" +
"  }\n" +
"}\n" +
"```\n" +
"\n" +
"So much for logic. There can be a lot more, of course, but for the sake of illustration, it will suffice.\n" +
"\n" +
"Next, the view.\n" +
"\n" +
"```jsx\n" +
"// ui/Thing/index.js\n" +
"\n" +
"const Thing = (props) => {\n" +
"  const {\n" +
"    active,\n" +
"    hovered,\n" +
"    onClick,\n" +
"    onMouseEnter,\n" +
"    onMouseLeave,\n" +
"    text,\n" +
"  } = props;\n" +
"  \n" +
"  return (\n" +
"    <div\n" +
"      onClick={onClick}\n" +
"      onMouseEnter={onMouseEnter}\n" +
"      onMouseLeave={onMouseLeave}\n" +
"      style={{\n" +
"        background: active ? \"tomato\" : \"transparent\",\n" +
"        color: hovered ? \"yellow\" : \"black\",\n" +
"      }}\n" +
"    >\n" +
"      {text}\n" +
"    </div>\n" +
"  );\n" +
"};\n" +
"```\n" +
"\n" +
"Again, this is it. Very simple and concise. \n" +
"\n" +
"This pattern works great in teams with junior and middle developers, as they can work on the target goal while not staying behind due to either lack of knowledge in more complex logic matters, or to lack of interest in writing views. \n" +
"\n" +
"—\n" +
"\n" +
"- A minimal example can be seen on [CodeSandbox](https://codesandbox.io/s/3y7nl6z7mm);\n" +
"- Full example of this architecture can be found in [my project](https://github.com/tomekbuszewski/Videoplayer)."