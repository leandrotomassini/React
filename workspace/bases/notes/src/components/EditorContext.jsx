import { createContext, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

export const EditorContext = createContext();

function EditorContextProvider( props ) {

  const editorInstanceRef = useRef();

  const initEditor = () => {

    const editor = new EditorJS( {
      holder: "editorjs",
      placeholder: "Let's take a note!",
      tools: {}
    } );

    editorInstanceRef.current = editor;
  };

  return (
    <EditorContextProvider value={ { initEditor, editorInstanceRef } }>
      { props.children }
    </EditorContextProvider>
  );
}

export default EditorContextProvider;