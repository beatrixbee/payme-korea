export interface BalanceData {
	branch: string;
	name: string;
	account: string;
	code_currency: string;
	current_balance: string;
}

export interface BalanceError {
	code: number;
	message: string;
}

export interface Balance {
	success: boolean;
	data: BalanceData;
	error: BalanceError;
}

export interface BalanceMoney {
	success: boolean
	data: BalanceMoneyData
	error: BalanceMoneyError
}

export interface BalanceMoneyData {
	branch: string
	name: string
	account: string
	code_currency: string
	current_balance: string
}

export interface BalanceMoneyError {
	code: number
	message: string
}
