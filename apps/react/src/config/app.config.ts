export interface AppConfig {
  /**
   * The URL of the api service.
   */
  API_URL: string;
}

export const appConfig: AppConfig = {
  API_URL: 'http://localhost:3000',
};
