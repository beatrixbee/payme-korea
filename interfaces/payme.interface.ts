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

export interface TransactionsData {
	success: boolean
	data: Transactions[]
	error: Error
}

export interface Transactions {
	id: number
	receiptId: string
	agent_amount: number
	provider_amount: number
	service_exchange_rate: number
	service_to_accrual: number
	senderFirstName: string
	senderLastName: string
	senderStreet: string
	senderCity: string
	senderCountry: string
	senderPhone: string
	senderBirthdate: string
	senderNationality: string
	senderDocType: string
	senderDocSeriesNumber: string
	receiverFirstName: string
	receiverLastName: string
	receiverCountry: string
	receiverPhone: string
	receiverCardNumber: string
	receiverProcessingType: string
	rrn: string
	state: string
	created_at: string
	updated_at: string
	tran_1: string
	tran_2: string
	tran_3: string
	error_1: string
	error_2: string
	error_3: string
	tran_4: string
	error_4: string
}

export interface Error { }