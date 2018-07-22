pragma solidity ^0.4.23;

contract Demo {
	uint public balance;

	// Initialize global variables
	constructor() public
	{
		balance = 0;
	}

	// The payable keyword allows this function to accept coins
	function contribute() public payable
	{
		// msg.value is the number of Wei (Ethereum unit) sent in a transaction
		balance += msg.value;
	}
}