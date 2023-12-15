import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { Button, Input } from '@material-tailwind/react';
import SecondaryEditor from '../../components/GraphiQL/SecondaryEditor';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    backgroundImage: '',
    foreground: '#1a1a19',
    caret: '#AEAFAD',
    selection: '#c9c9c9',
    selectionMatch: '#ffbe98',
    gutterBackground: '#ffdecb',
    gutterForeground: '#4D4D4C',
    gutterBorder: '#dddddd',
    gutterActiveForeground: '',
    lineHighlight: '#ffe9dc',
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.tagName, color: '#008a02' },
    { tag: t.variableName, color: '#1a00db' },
    { tag: t.propertyName, color: '#16777e' },
    { tag: t.attributeName, color: '#b21f1f' },
    { tag: t.string, color: '#bf7c08' },
    { tag: t.attributeValue, color: '#317fc9' },
    { tag: t.number, color: '#057a0d' },
    { tag: t.bool, color: '#1ab7ad' },
  ],
});

const GraphiQL: FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex gap-1 w-full p-2 items-center">
        <Button size="sm" variant="outlined">
          Send
        </Button>
        <Button size="sm" variant="outlined">
          Apply
        </Button>
        <Input
          crossOrigin=""
          variant="standard"
          label="Endpoint"
          value="https://countries.trevorblades.com/"
        />
        <Button size="sm" variant="outlined" className="ml-auto">
          Docs
        </Button>
      </div>

      <div className="flex justify-center justify-items-center w-full h-[calc(100%-60px)]">
        <div className="flex flex-col max-h-full w-1/2 h-full pr-2">
          <div className="overflow-auto">
            <CodeMirror
              theme={myTheme}
              className="text-sm"
              value={`a`.repeat(200) + `a\n`.repeat(200)}
            />
          </div>
          <div className="flex w-full">
            <SecondaryEditor />
          </div>
        </div>

        <div className="w-1/2 h-full  pl-2 overflow-auto">
          <CodeMirror
            theme={myTheme}
            className="text-sm"
            value={`a`.repeat(200) + `a\n`.repeat(200)}
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
            }}
            readOnly={true}
            editable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphiQL;
