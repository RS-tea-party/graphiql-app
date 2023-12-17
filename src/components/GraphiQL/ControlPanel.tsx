import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { useContext } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const ControlPanel = () => {
  const { locales, lang } = useContext(LocaleContext);
  return (
    <div className="flex flex-wrap sticky top-[78px] gap-1 w-full p-2.5 items-center z-20 bg-white">
      <ButtonThemed>{locales[lang].graphiQL.change}</ButtonThemed>

      <div className="order-first md:order-none w-full md:w-auto md:grow">
        <Input crossOrigin="" variant="standard" label="Endpoint" />
      </div>
      <ButtonThemed className="p-1 rounded-full ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </ButtonThemed>
    </div>
  );
};

export default ControlPanel;
