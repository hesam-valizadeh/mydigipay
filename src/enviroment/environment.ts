import { IEnvironmentInterface } from '../app/@core/models/interfaces/environment.interface';
import { DeployTargetEnum } from '../app/@core/models/enums';
const baseURL = 'http://mydigipay.website';
export const environment: IEnvironmentInterface = {
  production: false,
  deployTarget: DeployTargetEnum.LOCAL,
  baseURL,
  apiUrl: baseURL + '/api',
};
