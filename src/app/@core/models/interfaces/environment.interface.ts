import {DeployTargetEnum} from '../enums';

export interface EnvironmentInterface {
  production: boolean,
  deployTarget: DeployTargetEnum,
  apiUrl: string,
  baseURL: string,
}
