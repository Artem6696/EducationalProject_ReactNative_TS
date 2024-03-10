import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import Markdown from "react-native-markdown-display";
import MarkdownDisplay from "@/components/part3/MarkdownDisplay";

const template = `  
# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

\`\`\`sh
cd dillinger
npm i
node app
\`\`\`
`;
Pressable;
const editorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");
  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => {
            setTab("edit");
          }}
          style={[styles.tab, {borderColor: tab == 'edit' ? 'green' : 'white' }]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setTab("preview");
          }}
          style={[styles.tab, {borderColor: tab == 'preview' ? 'green' : 'white'}]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {/* <MarkdownDisplay>{content}</MarkdownDisplay> */}
      {tab == "edit" ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={4}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default editorScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    paddingTop: 20,
    borderRadius: 20,
    fontSize: 16,
    marginTop: 15,
  },
  tabsContainer: {
    gap: 10,
    flexDirection: "row",
  },
  tab: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "pink",
  },
  tabText: {
    fontFamily: "InterRegular",
    fontSize: 16,
  },
});
