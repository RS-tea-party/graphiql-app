import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';

const ControlPanel = () => {
  return (
    <div className="flex gap-1 w-full p-2 items-center">
      <ButtonThemed>Send</ButtonThemed>
      <ButtonThemed>Apply</ButtonThemed>
      <Input
        crossOrigin=""
        variant="standard"
        label="Endpoint"
        value="https://countries.trevorblades.com/"
      />
      <ButtonThemed>Docs</ButtonThemed>
    </div>
  );
};

export default ControlPanel;
