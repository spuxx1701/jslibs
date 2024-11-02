import React, { useEffect, useState } from 'react';
import { intl } from '@spuxx/js-utils';
import { Config } from '@spuxx/browser-utils';
import { Session } from '../api/session/session.types';
import { Api } from '../api/api.service';
import { AppConfig } from '../config/app.config';

export default function SessionPanel(): React.ReactElement {
  const { API_URL } = Config.getConfig<AppConfig>();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      try {
        const session: Session = await Api.getSession();
        setSession(session);
      } catch (error) {
        // Do nothing
      }
    };
    getSession();
  }, []);

  const handleLogin = () => {
    const currentUrl = window.location.href;
    const redirectUrl = encodeURIComponent(currentUrl);
    window.location.href = `${API_URL}/auth/login?returnTo=${redirectUrl}`;
  };

  const handleLogout = () => {
    const currentUrl = window.location.href;
    const redirectUrl = encodeURIComponent(currentUrl);
    window.location.href = `${API_URL}/auth/logout?returnTo=${redirectUrl}`;
  };

  return (
    <>
      <h2>{intl('session.title')}</h2>
      {session ? (
        <>
          <p>{intl('session.authenticated')}</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <button onClick={handleLogout}>{intl('session.logout')}</button>
        </>
      ) : (
        <>
          <p>{intl('session.notAuthenticated')}</p>
          <button onClick={handleLogin}>{intl('session.login')}</button>
        </>
      )}
    </>
  );
}
