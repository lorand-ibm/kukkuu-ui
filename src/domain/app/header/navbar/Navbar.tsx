import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import styles from './navbar.module.scss';
import LanguageDropdown from './languageDropdown/LanguageDropdown';
import UserDropdown from '../userDropdown/UserDropdown';

const Navbar: React.FunctionComponent = props => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={styles.navbarTop}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo} onClick={() => history.push('/')}></div>
        <h3 className={styles.appName}>{t('appName')}</h3>
      </div>
      <div className={styles.languageWrapper}>
        <UserDropdown />
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Navbar;