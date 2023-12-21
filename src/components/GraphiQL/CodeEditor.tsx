import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { editorTheme, resultsTheme } from '../../themes/codemirror';
import { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { EditorView } from '@uiw/react-codemirror';

interface CodeEditorProps {
  mode: 'editor' | 'viewer';
  defaultValue?: string;
}

const CodeEditor = forwardRef<
  ReactCodeMirrorRef,
  PropsWithChildren<CodeEditorProps>
>((props, ref) => {
  return (
    <div className="relative max-w-full overflow-auto md:h-full min-h-[100px]">
      {props.children && (
        <div className="sticky top-[5px] right-0 z-10">
          <div className="absolute top-0 right-0 flex flex-col justify-center items-center gap-y-1">
            {props.children}
          </div>
        </div>
      )}

      <CodeMirror
        value={props.defaultValue}
        theme={props.mode === 'editor' ? editorTheme : resultsTheme}
        className="text-sm"
        basicSetup={{
          lineNumbers: props.mode === 'editor',
          foldGutter: props.mode === 'editor',
        }}
        readOnly={props.mode !== 'editor'}
        editable={props.mode === 'editor'}
        ref={ref}
        extensions={[EditorView.lineWrapping]}
      />
    </div>
  );
});

export default CodeEditor;
