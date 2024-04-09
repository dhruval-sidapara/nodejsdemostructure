import UserMasterService from "./userMaster.service";

export interface PermissionDetails {
	name: string;
	view: boolean;
	create: boolean;
	edit: boolean;
	delete: boolean;
}

export interface LoggedInUserDetails {
	id: string;
	firstName: string;
	lastName: string;
}

export interface LoggedInUserTokenPayload {
	user: LoggedInUserDetails;
	expires: number;
}

export default class AuthorizationService {
	private userMasterServices = new UserMasterService();
	public findUserById = async (userId: string) => {
		const userData = await this.userMasterServices.findOne({ id: userId, isActive: true });

		return {
			id: userId,
			firstName: userData?.firstName || "",
			lastName: userData?.lastName || "",
			isActive: userData?.isActive || false,
			permissions: userData?.permissions || [],
		};
	};
}
