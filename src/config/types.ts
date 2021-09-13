interface IApp {
  host: string;
  port: number;
}

interface ISecrets {
  jwt: string;
  jwtExp: string;
}

interface IDatabase {
  host: string;
  port: number;
  name: string;
}

export interface IBaseConfig {
  env: string;
  isDev: boolean;
  isTest: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  app: IApp;
  secrets: ISecrets;
  database: IDatabase;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
