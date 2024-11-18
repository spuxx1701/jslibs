import { defineEndpoint } from '@spuxx/js-utils';
import type { Session } from './session.types';
import { Config } from '@spuxx/browser-utils';
import { AppConfig } from '../../config/app.config';
import { Api } from '../api.service';

export const sessionEndpoints = {
  getSession: defineEndpoint({
    function: async (): Promise<Response> => {
      const { API_URL } = Config.getConfig<AppConfig>();
      return fetch(`${API_URL}/auth/session`, Api.requestOptions);
    },
    transformer: async (response): Promise<Session> => {
      const json = await response.json();
      const session: Session = { ...json };
      return session;
    },
  }),
};
