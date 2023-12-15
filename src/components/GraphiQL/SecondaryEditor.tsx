import { FC } from 'react';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';

const SecondaryEditor: FC = () => {
  const [activeTab, setActiveTab] = React.useState('variables');
  const [open, setOpen] = React.useState(false);

  const handleOpen = (value: boolean): void =>
    setOpen(open === value ? false : true);

  return (
    <Tabs className="w-full" value={activeTab}>
      <Accordion
        open={open}
        icon={
          <ChevronDownIcon
            onClick={() => handleOpen(true)}
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition hover:bg-peachFuzz-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        }
      >
        <AccordionHeader className="py-0">
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
            }}
          >
            <Tab
              value={'variables'}
              onClick={() => {
                setActiveTab('variables');
                if (!open) handleOpen(true);
              }}
              className={`transition hover:bg-peachFuzz-200 ${
                activeTab === 'variables' ? 'text-gray-900 w-36' : 'w-36'
              }`}
            >
              {'Variables'}
            </Tab>
            <Tab
              value={'header'}
              onClick={() => {
                setActiveTab('header');
                if (!open) handleOpen(true);
              }}
              className={`transition hover:bg-peachFuzz-200 ${
                activeTab === 'variables' ? 'text-gray-900 w-36' : 'w-36'
              }`}
            >
              {'Header'}
            </Tab>
          </TabsHeader>
        </AccordionHeader>
        <AccordionBody className="py-0">
          <TabsBody className="h-full">
            <TabPanel
              className="p-0 h-full overflow-auto h-[150px]"
              value={'variables'}
            >
              <CodeMirror
                theme={myTheme}
                className="text-sm"
                value={`a`.repeat(10) + `a\n`.repeat(5)}
              />
            </TabPanel>
            <TabPanel
              className="p-0 h-full overflow-auto h-[150px]"
              value={'header'}
            >
              <CodeMirror
                theme={myTheme}
                className="text-sm"
                value={`b`.repeat(10) + `b\n`.repeat(5)}
              />
            </TabPanel>
          </TabsBody>
        </AccordionBody>
      </Accordion>
    </Tabs>
  );
};

export default SecondaryEditor;
