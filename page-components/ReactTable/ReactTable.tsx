import React, { ChangeEvent, useState } from 'react';
import { useFilters, useSortBy, useTable } from 'react-table';
import { TransactionsTableData } from '../../helpers/helpers';
import { ReactTableProps } from './ReactTable.props';

const ReactTable = ({ data, columns }: any) => {
	// Use the useTable Hook to send the columns and data to build the table
	const {
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups, // headerGroups, if your table has groupings
		rows, // rows for the table based on the data passed
		prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
		setFilter, // The useFilter Hook provides a way to set the filter
	} = useTable<TransactionsTableData>(
		{
			columns,
			data
		},
		useFilters, // Adding the useFilters Hook to the table
		useSortBy // This plugin Hook will help to sort our table columns


	);

	// Create a state
	const [filterInput, setFilterInput] = useState("");

	// Update the state when input changes
	const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setFilter("id", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
		setFilterInput(value);
	};


	return (<>
		Search By ID<input
			value={filterInput}
			onChange={handleFilterChange}
			placeholder={"Search name"}
		/>
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th
								{...column.getHeaderProps(column.getSortByToggleProps())}
								className={
									column.isSorted
										? column.isSortedDesc
											? "sort-desc"
											: "sort-asc"
										: ""
								}
							>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map(cell => (
								<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	</>
	);
};

export default ReactTable;