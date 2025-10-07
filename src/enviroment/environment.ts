import {EnvironmentInterface} from '../app/@core/models/interfaces/environment.interface';
import {DeployTargetEnum} from '../app/@core/models/enums';

const baseURL = 'http://digipay.website';

export const environment: EnvironmentInterface = {
  production: false,
  deployTarget: DeployTargetEnum.LOCAL,
  baseURL,
  apiUrl: baseURL + '/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
