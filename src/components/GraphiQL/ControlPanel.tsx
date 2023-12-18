import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { useContext } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const ControlPanel = () => {
  const { locales, lang } = useContext(LocaleContext);
  return (
    <div className="flex flex-wrap sticky top-[78px] gap-1 w-full p-2.5 items-center z-20 bg-white">
      <ButtonThemed>{locales[lang].graphiQL.change}</ButtonThemed>
      <div className="w-auto grow">
        <Input crossOrigin="" variant="standard" label="Endpoint" />
      </div>
    </div>
  );
};

export default ControlPanel;
