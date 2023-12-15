import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { useContext } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const ControlPanel = () => {
  const { locales, lang } = useContext(LocaleContext);
  return (
    <div className="flex flex-wrap sticky top-0 flex gap-1 w-full p-2.5 items-center">
      <ButtonThemed>{locales[lang].graphiQL.send}</ButtonThemed>
      <ButtonThemed>{locales[lang].graphiQL.apply}</ButtonThemed>
      <div className="order-first md:order-none w-full md:w-auto md:grow">
        <Input
          crossOrigin=""
          variant="standard"
          label="Endpoint"
          value="https://countries.trevorblades.com/"
        />
      </div>

      <ButtonThemed className="ml-auto">
        {locales[lang].graphiQL.docs}
      </ButtonThemed>
    </div>
  );
};

export default ControlPanel;
