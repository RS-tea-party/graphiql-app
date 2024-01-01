import { FC, useContext, useState } from 'react';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Lang } from '../../dto/types';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const LangSwitcher: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setLang, spellingList } = useContext(LocaleContext);

  const clickHandler = (lang: Lang): void => {
    localStorage.setItem('lang', lang);
    setLang(lang);
  };

  return (
    <menu data-testid="lang-switcher">
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
            role="button"
          >
            {`${spellingList.langSwitcher.menuTitle} `}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="overflow-visible lg:grid">
          <MenuItem onClick={() => clickHandler('en')}>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {'English'}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => clickHandler('ru')}>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {'Русский'}
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </menu>
  );
};

export default LangSwitcher;
