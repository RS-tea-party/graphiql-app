import { Button, Input } from '@material-tailwind/react';

const ControlPanel = () => {
  return (
    <div className="flex gap-1 w-full p-2 items-center">
      <Button size="sm" variant="outlined">
        Send
      </Button>
      <Button size="sm" variant="outlined">
        Apply
      </Button>
      <Input
        crossOrigin=""
        variant="standard"
        label="Endpoint"
        value="https://countries.trevorblades.com/"
      />
      <Button size="sm" variant="outlined" className="ml-auto">
        Docs
      </Button>
    </div>
  );
};

export default ControlPanel;
