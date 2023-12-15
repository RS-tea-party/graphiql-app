import CodeMirror from '@uiw/react-codemirror';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';
import SecondaryEditor from './SecondaryEditor';

const EditorsSection = () => {
  return (
    <div className="flex flex-col w-full md:max-h-full md:w-1/2 md:h-full px-[20px] border-2 mr-[5px]">
      <div className="max-w-full overflow-auto">
        <CodeMirror
          theme={myTheme}
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
