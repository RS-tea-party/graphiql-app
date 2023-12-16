import CodeMirror from '@uiw/react-codemirror';
import SecondaryEditor from './SecondaryEditor';
import { editorTheme } from '../../themes/codemirror';

const EditorsSection = () => {
  return (
    <div className="flex flex-col w-full md:max-h-full md:w-1/2 md:h-full px-[20px] my-2 md:my-0 border-2 md:mr-[5px]">
      <div className="max-w-full overflow-auto md:h-full">
        <CodeMirror
          theme={editorTheme}
          className="text-sm"
          value={`a`.repeat(15) + `a\n`.repeat(15)}
        />
      </div>
      <div className="flex w-full">
        <SecondaryEditor />
      </div>
    </div>
  );
};

export default EditorsSection;
