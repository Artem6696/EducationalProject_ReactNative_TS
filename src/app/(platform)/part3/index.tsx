import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MarkdownDisplay from "@/components/part3/MarkdownDisplay";

const description = `


# Integrate Markdown content in **React Native**👨🏼‍💻
## Markdown is a lightweight markup language for formatting text

This application allows you to create and edit Markdown documents directly on your mobile device using React Native. You can easily format text using Markdown syntax, including headings, lists, bold, italic, and more. The application provides a user-friendly interface for writing and previewing Markdown content, making it ideal for note-taking, writing articles, and other text-based tasks. 

Key features include:
- Real-time preview of Markdown content
- Syntax highlighting for easier editing
- Exporting Markdown documents to various formats
- Customizable themes for the editor
- Integration with cloud storage services for saving and syncing documents

With this application, you can harness the power of Markdown on your mobile device, making it easier than ever to create well-formatted documents on the go.
`;

export default function Application1DetailsScreen() {
  return (
    <SafeAreaView  edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{ title: "part 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="part3/editor" asChild>
        <Button  title="go to Edior"/>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
