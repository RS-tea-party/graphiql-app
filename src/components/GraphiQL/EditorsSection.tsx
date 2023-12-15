import CodeMirror from '@uiw/react-codemirror';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';
import SecondaryEditor from './SecondaryEditor';

const EditorsSection = () => {
  return (
    <div className="flex flex-col max-h-full w-1/2 h-full px-[20px] border-2 mr-[5px]">
      <div className="overflow-auto">
        <CodeMirror
          theme={myTheme}
          className="text-sm"
          value={`a`.repeat(45) + `a\n`.repeat(45)}
        />
      </div>
      <div className="flex w-full">
        <SecondaryEditor />
      </div>
    </div>
  );
};

export default EditorsSection;
