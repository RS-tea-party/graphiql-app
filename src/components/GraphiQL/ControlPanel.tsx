import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';

const ControlPanel = () => {
  return (
    <div className="flex flex-wrap sticky top-0 flex gap-1 w-full p-2 items-center">
      <ButtonThemed>Send</ButtonThemed>
      <ButtonThemed>Apply</ButtonThemed>
      <div className="order-first md:order-none w-full md:w-auto md:grow">
        <Input
          crossOrigin=""
          variant="standard"
          label="Endpoint"
          value="https://countries.trevorblades.com/"
        />
      </div>

      <ButtonThemed>Docs</ButtonThemed>
    </div>
  );
};

export default ControlPanel;
