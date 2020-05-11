import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';

import i18n from '../../common/translation/i18n/i18nInit';
import userManager from './userManager';
import { StoreThunk } from '../app/types/AppTypes';
import {
  startFetchingToken,
  fetchTokenSuccess,
  fetchTokenError,
} from './state/BackendAuthenticationActions';
import { TUNNISTAMO_API_TOKEN_ENDPOINT } from '../api/constants/ApiConstants';
import { BackendTokenResponse } from './types/BackendAuthenticationTypes';
import { getCurrentLanguage } from '../../common/translation/TranslationUtils';

export const loginTunnistamo = (path?: string) => {
  userManager
    .signinRedirect({
      data: { path: path || 'profile' },
      /* eslint-disable @typescript-eslint/camelcase */
      ui_locales: getCurrentLanguage(i18n),
    })
    .catch((error) => {
      if (error.message === 'Network Error') {
        toast(i18n.t('authentication.networkError.message'), {
          type: toast.TYPE.ERROR,
        });
      } else {
        toast(i18n.t('authentication.errorMessage'), {
          type: toast.TYPE.ERROR,
        });
        Sentry.captureException(error);
      }
      // eslint-disable-next-line no-console
      console.error(error);
    });
  document.cookie = 'loggedOut; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};

export const logoutTunnistamo = async () => {
  try {
    document.cookie = 'loggedOut=1; max-age=10';
    await userManager.signoutRedirect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    Sentry.captureException(error);
  }
};

export const authenticateWithBackend = (
  accessToken: string
): StoreThunk => async (dispatch) => {
  try {
    dispatch(startFetchingToken());

    const res: AxiosResponse<BackendTokenResponse> = await axios.post(
      TUNNISTAMO_API_TOKEN_ENDPOINT,
      {},
      {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      }
    );

    dispatch(fetchTokenSuccess(res.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    dispatch(fetchTokenError(error));
    toast(i18n.t('authentication.errorMessage'), {
      type: toast.TYPE.ERROR,
    });
  }
};
