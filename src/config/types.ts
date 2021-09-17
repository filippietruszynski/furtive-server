/* PROCESS */

export interface IProcessEnv {
  [key: string]: string | undefined;
}

/* CONFIG */

interface IApp {
  host: string;
  port: number;
}

interface IDatabase {
  host: string;
  port: number;
  name: string;
}

interface ISecrets {
  token: string;
  tokenExp: string;
}

export interface IBaseConfig {
  nodeEnv: string;
  isDev: boolean;
  isTest: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  app: IApp;
  database: IDatabase;
  secrets: ISecrets;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
