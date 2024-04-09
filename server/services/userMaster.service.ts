export default class UserMasterService {
	public findOne = async (searchObject: any, includePassword: boolean = false) => {
        return {
			id: "1",
			firstName: "Test",
			lastName: "User",
			isActive: true,
			permissions: [],
            password:""
		};
    };
}
