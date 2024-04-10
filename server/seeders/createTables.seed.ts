import { logger } from "../config";
import { Customer } from "../models";

const createTables = async () => {
	const successFullTable: Array<string> = [];
	const errorTable: Array<string> = [];

	await Customer.sync({ alter: { drop: false } })
		.then(() => {
			successFullTable.push(`Customer Table Created`);
		})
		.catch((error) => {
			errorTable.push(`Customer Table Error : ${error}`);
		});

	const totalTable = successFullTable.length + errorTable.length;

	logger.info(`Total Tables In ParthTailor Database : ${totalTable}`);
	if (successFullTable.length > 0) {
		logger.info(`Tables Created In ParthTailor Database`);
		successFullTable.forEach((message: string, index: number) => {
			logger.warn(`${index + 1}/${totalTable} - ${message}`);
		});
	}
	if (errorTable.length > 0) {
		logger.error(`Tables Failed In ParthTailor Database`);
		errorTable.forEach((message) => {
			logger.error(message);
		});
	}
};

export default createTables;
