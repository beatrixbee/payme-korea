
export interface Data {
	branch: string;
	name: string;
	account: string;
	code_currency: string;
	current_balance: string;
}

export interface Error {
	code: number;
	message: string;
}

export interface Balance {
	success: boolean;
	data: Data;
	error: Error;
}
