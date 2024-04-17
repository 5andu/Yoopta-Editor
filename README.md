[![RepoRater](https://repo-rater.eddiehub.io/api/badge?owner=Darginec05&name=Yoopta-Editor)](https://repo-rater.eddiehub.io/rate?owner=Darginec05&name=Yoopta-Editor)

# Welcome to Yoopta-Editor 🎉

![](https://res.cloudinary.com/ench-app/image/upload/v1691533442/9C3CB447-AB61-4644-BA3A-00F089BCD053_r2bhws.gif)

## Introduction

Yoopta-Editor is an open-source rich-text editor designed for React applications. Using Yoopta-Editor you can effortlessly create a robust and versatile editor that rivals the likes of Notion and Medium.

This editor empowers you to seamlessly customize, extend, and tailor its behavior and user interface to your specific needs. Whether you want to add unique features, style elements, or create a tailored UI, Yoopta-Editor provides you with the tools to make it your own.

## Features

- Default list of plugins
- Each plugin can be easily customize and extensible
- You can create your own plugin
- Many typical solved problems in UX behavior.
- A list of useful tools for the convenience of working with the editor
- Automatic lazy loading for media components (eg. embeds)
- Shortcuts and markdown style
- Offline mode
- Redo/undo changes
- A cool representation of the data in JSON format, so you can easily save the content data to the database and validate
- ChatGPT tool (soon) 😍
- Component for just rendering your data without any editor tools for fast page loading
  Useful for blog platforms!
- Drag and drop, nested dnd is supported also
- The soul invested in the development of this editor 💙
- ...and other features

## Getting Started

First install the peer dependencies and the Yoopta core package with at least one plugin

```bash
## slate and slate-react - peer dependecies
## @yoopta/editor - core package
## @yoopta/paragraph - default plugin
yarn add slate slate-react @yoopta/editor @yoopta/paragraph
# or
npm install slate slate-react @yoopta/editor @yoopta/paragraph
```

### Plugins:

```jsx
import YooptaEditor from '@yoopta/editor';
import Paragraph from '@yoopta/paragraph';
import { useState } from 'react';

// List of plugins should be defined outside component
const plugins = [Paragraph];

// Your custom styles
const styles = { width: 640, margin: '0 auto', padding: '40px 10px' };

export default function Editor() {
  const [value, setValue] = useState([]);

  return (
    <div style={styles}>
      <YooptaEditor value={value} onChange={(val) => setValue(val)} plugins={plugins} placeholder="Type text.." />
    </div>
  );
}
```

Here is list of available plugins

- @yoopta/paragraph
- @yoopta/blockquote
- @yoopta/code
- @yoopta/embed
- @yoopta/image
- @yoopta/link
- @yoopta/file
- @yoopta/callout
- @yoopta/video
- @yoopta/lists
- @yoopta/headings

**_[Check code with plugins](https://github.com/Darginec05/Yopta-Editor/blob/master/web/src/examples/withBasicExample.tsx#L27)_**

### Tools

Yoopta-Editor provides useful tools that can help you when working with the editor

```jsx
// IMPORT TOOLS
import LinkTool from '@yoopta/link-tool';
import ActionMenu from '@yoopta/action-menu-list';
import Toolbar from '@yoopta/toolbar';

// Tools should be defined outside component
const TOOLS = {
  Toolbar: <Toolbar />,
  ActionMenu: <ActionMenu />,
  LinkTool: <LinkTool />,
};

export default function Editor() {
  const [value, setValue] = useState([]);

  return (
    <div style={styles}>
      <YooptaEditor
        value={value}
        onChange={(val) => setValue(val)}
        plugins={plugins}
        placeholder="Type text.."
        tools={TOOLS}
      />
    </div>
  );
}
```

Here is list of available tools

- @yoopta/link-tool
- @yoopta/action-menu-list
- @yoopta/toolbar
- _@yoopta/chat-gpt-assistant_ - **soon**

**_[Check code with tools](https://github.com/Darginec05/Yopta-Editor/blob/master/web/src/examples/withBasicExample.tsx#L76)_**

### Marks

Marks are simple text formats

```jsx
// IMPORT MARKS
import { Bold, Italic, CodeMark, Underline, Strike } from '@yoopta/marks';

export default function Editor() {
  const [value, setValue] = useState([]);
  const MARKS = [Bold, Italic, CodeMark, Underline, Strike];

  return (
    <div style={styles}>
      <YooptaEditor
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Type text.."
        plugins={plugins}
        tools={TOOLS}
        marks={MARKS}
      />
    </div>
  );
}
```

Here is list of available marks from **@yoopta/marks** package

- Bold
- Italic
- CodeMark
- Underline
- Strike

**_[Check code with marks](https://github.com/Darginec05/Yopta-Editor/blob/master/web/src/examples/withBasicExample.tsx#L85)_**

## Examples - DEMO's

In this section, we provide you with some examples of using the Yoopta-Editor in your projects. These examples will help you get started quickly and show you how easy it is to integrate and customize the editor to your needs.

Okay, let's go!

- [With basic example](https://yopta-editor.vercel.app/examples/withBasicExample)
- [With Notion example](https://yopta-editor.vercel.app/examples/withNotionExample)
- [With custom toolbar (Medium example)](https://yopta-editor.vercel.app/examples/withCustomToolbar)
- [With media plugins](https://yopta-editor.vercel.app/examples/withMedia)
- [With custom component](https://yopta-editor.vercel.app/examples/withCustomComponent)
- [With extended plugin](https://yopta-editor.vercel.app/examples/withExtendedPlugin)
- [With offline mode](https://yopta-editor.vercel.app/examples/withOffline)
- [With HTML and Markdown exports](https://yopta-editor.vercel.app/examples/withExports)
- [With custom mark](https://yopta-editor.vercel.app/examples/withCustomMark)
- ...and check other examples in the sidebar list

## Give us ⭐️ star

If you find Yoopta-Editor useful and valuable for your projects, I kindly ask you to show your support by giving us a ⭐️ star on GitHub. Your appreciation means a lot to us and helps us grow and continue improving the editor for the community. 💙💙💙

## License

Yoopta-Editor is released under the [MIT License](https://github.com/Darginec05/Yopta-Editor/blob/master/LICENSE). Feel free to use and modify it for your projects.

## Support

If you have any questions or need assistance raise an issue in the GitHub repository. I will be happy to help you.

Let's create powerful and engaging editing experiences together with Yoopta-Editor!

## Contacts

- [Twitter](https://twitter.com/LebovskiYoo)
- [Telegram](https://tttttt.me/DevOpsBanda)
- [Github](https://github.com/Darginec05)
