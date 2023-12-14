import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import './codemirror.css';
import { Button } from '@material-tailwind/react';

const GraphiQL: FC = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center w-full h-full">
      <div className="flex gap-1 w-full px-2 items-center">
        <Button size="sm" variant="outlined">
          Send
        </Button>
        <span>Endpoint: https://countries.trevorblades.com/</span>
        <Button size="sm" variant="outlined" className="ml-auto">
          Docs
        </Button>
      </div>
      <div className="flex justify-center justify-items-center w-full h-4/5">
        <CodeMirror
          className="max-h-full w-1/2 h-full  pr-2"
          value="console.log()"
        />
        <CodeMirror
          className="w-1/2 h-full  pl-2"
          value="console.log()"
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
          }}
          readOnly={true}
          editable={false}
        />
      </div>
    </div>
  );
};

export default GraphiQL;
