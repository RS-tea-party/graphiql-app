import CodeMirror from '@uiw/react-codemirror';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';
import SecondaryEditor from './SecondaryEditor';

const EditorsSection = () => {
  return (
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
  );
};

export default EditorsSection;
