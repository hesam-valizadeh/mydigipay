import { DeployTargetEnum } from '../enums';

export interface IEnvironmentInterface {
	production: boolean;
	deployTarget: DeployTargetEnum;
	apiUrl: string;
	baseURL: string;
}
