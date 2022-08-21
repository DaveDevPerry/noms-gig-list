import React, { createContext, useContext, useState } from 'react';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [totalGigsPerBand, setTotalGigsPerBand] = useState(null);
	const [totalGigsPerCity, setTotalGigsPerCity] = useState(null);
	// const [isFormOpen, setIsFormOpen] = useState(false);
	// const [isFinanceFormOpen, setIsFinanceFormOpen] = useState(false);
	// const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
	// const [isActivityFormOpen, setIsActivityFormOpen] = useState(false);
	// const [goToRoute, setGoToRoute] = useState(true);
	// const [dayDetails, setDayDetails] = useState(null);
	// const [catStats, setCatStats] = useState(null);
	// // state for rendering stat widget on metrics page
	// const [appStats, setAppStats] = useState([]);

	// const setGlobalGigsPerBandCount = (arr) => {
	// 	setTotalGigsPerBand(arr);
	// };
	// const [perfectDayStats, setPerfectDayStats] = useState([])

	// sorts out appStats into relevant objects for rendering stat widget in metrics page

	// FETCH GIGS AND RETURN NEW ARRAY OF OBJECTS SHOWING HOW MANY TIMES A BAND HAS PLAYED
	// const [gigCountPerBand, setGigCountPerBand] = useState(null);
	// const getGigCountPerBand = (gigs) => {
	// 	console.log(gigs, 'gigs in context');

	// 	setGigCountPerBand([
	// 		{ name: 'tv', count: 5 },
	// 		{ name: 'slade', count: 15 },
	// 	]);
	// };

	// ************* GET ALL TASKS IN A CATEGORY *********************

	// const [categoryDetails, setCategoryDetails] = useState(null);
	// const [individualCategoryStats, setIndividualCategoryStats] = useState(null);

	// const getAllTasksInACategory = (data, categoryName) => {
	// 	console.log(data, categoryName, 'getAllTasksInACategory data');

	// 	const testData = data.map((item) => item.tasks);
	// 	console.log(testData, 'test');

	// 	const merged = [].concat.apply([], testData);
	// 	console.log(merged);

	// 	const filteredCategory = merged.filter(
	// 		(item) => item.category === categoryName
	// 	);
	// 	console.log(filteredCategory, 'filtered category');

	// 	const tasksInCategory = [
	// 		...new Set(filteredCategory.map((item) => item.task)),
	// 	];
	// 	console.log(tasksInCategory, 'today categories');

	// 	const tasksInCatStatsArr = [];
	// 	const totalStatsInACategory = {
	// 		uniqueTaskCount: tasksInCategory.length,
	// 		assignedTaskCount: 0,
	// 		completedTaskCount: 0,
	// 		perfectTaskCount: 0,
	// 		percentage: 0,
	// 	};
	// 	// loop over unique categories
	// 	for (let i = 0; i < tasksInCategory.length; i++) {
	// 		const taskObj = {
	// 			name: tasksInCategory[i],
	// 			completed: filteredCategory.filter(
	// 				(task) => task.task === tasksInCategory[i] && task.isComplete === true
	// 			).length,
	// 			// completed: merged.filter((task) => task.category === catName).reduce((r,a) => {
	// 			// 	return r + a.completedTaskCount
	// 			// }) ,
	// 			assigned: filteredCategory.filter(
	// 				(task) => task.task === tasksInCategory[i]
	// 			).length,
	// 			percentage:
	// 				(filteredCategory.filter(
	// 					(task) =>
	// 						task.task === tasksInCategory[i] && task.isComplete === true
	// 				).length /
	// 					filteredCategory.filter((task) => task.task === tasksInCategory[i])
	// 						.length) *
	// 				100,
	// 		};
	// 		totalStatsInACategory.assignedTaskCount += taskObj.assigned;
	// 		totalStatsInACategory.completedTaskCount += taskObj.completed;
	// 		if (taskObj.percentage === 100) {
	// 			totalStatsInACategory.perfectTaskCount++;
	// 		}
	// 		totalStatsInACategory.percentage =
	// 			(totalStatsInACategory.completedTaskCount /
	// 				totalStatsInACategory.assignedTaskCount) *
	// 			100;
	// 		console.log(taskObj, 'task obj');
	// 		tasksInCatStatsArr.push(taskObj);
	// 	}

	// 	setCategoryDetails(tasksInCatStatsArr);
	// 	console.log(categoryDetails, 'cat details');
	// 	setIndividualCategoryStats(totalStatsInACategory);
	// 	console.log(totalStatsInACategory, 'total stats in a category');
	// };

	// const [todoMetrics, setTodoMetrics] = useState(null);

	// const getTodoMetrics = (todos) => {
	// 	console.log(todos, 'todos context');
	// 	const totalTodos = todos.length;
	// 	const completedTodos = todos.filter((todo) => {
	// 		return todo.completed === true;
	// 	}).length;
	// 	const todoObj = {
	// 		todoCount: totalTodos,
	// 		completedTodoCount: completedTodos,
	// 		percentage: (completedTodos / totalTodos) * 100 || 0,
	// 		remainingTodoCount: totalTodos - completedTodos,
	// 	};
	// 	setTodoMetrics(todoObj);
	// };

	// const [financeMetrics, setFinanceMetrics] = useState(null);

	// const getFinanceMetrics = (finances) => {
	// 	console.log(finances, 'finances context');
	// 	const totalAmountBorrowed = finances.reduce((r, a) => {
	// 		return r + parseInt(a.amount);
	// 	}, 0);
	// 	const totalAmountRepaid = finances
	// 		.filter((item) => {
	// 			return item.completed === true;
	// 		})
	// 		.reduce((r, a) => {
	// 			return r + parseInt(a.amount);
	// 		}, 0);
	// 	const financeData = {
	// 		amountBorrowed: totalAmountBorrowed,
	// 		amountRepaid: totalAmountRepaid,
	// 		percentage: (totalAmountRepaid / totalAmountBorrowed) * 100 || 0,
	// 		amountOwing: totalAmountBorrowed - totalAmountRepaid,
	// 	};

	// 	console.log(financeData, 'context');

	// 	setFinanceMetrics(financeData);
	// };
	const [dataLoaded, setDataLoaded] = useState(false);

	const [bandToView, setBandToView] = useState(null);

	const [bandDetailsData, setBandDetailsData] = useState(null);

	return (
		<AppContext.Provider
			value={{
				// goToRoute,
				// setGoToRoute,
				// appStats,
				// setAppStats,
				// sortAppStats,
				// dayDetails,
				// setDayDetails,
				// sortCategoryStats,
				// catStats,
				// isFormOpen,
				// setIsFormOpen,
				// categoryDetails,
				// setCategoryDetails,
				// getAllTasksInACategory,
				// individualCategoryStats,
				// isTaskFormOpen,
				// setIsTaskFormOpen,
				// // getPerfectDayStats
				// isActivityFormOpen,
				// setIsActivityFormOpen,
				// isFinanceFormOpen,
				// setIsFinanceFormOpen,
				// getFinanceMetrics,
				// financeMetrics,
				// getTodoMetrics,
				// todoMetrics,

				// getGigCountPerBand,
				// gigCountPerBand,
				setTotalGigsPerBand,
				totalGigsPerBand,

				totalGigsPerCity,
				setTotalGigsPerCity,
				// setGlobalGigsPerBandCount,
				dataLoaded,
				setDataLoaded,
				setBandToView,
				bandToView,
				setBandDetailsData,
				bandDetailsData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
