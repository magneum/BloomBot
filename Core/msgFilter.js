var usedCommandRecently = new Set();

/**
 * Check is number filtered
 * @param  {String} from
 */
var isFiltered = (from) => !!usedCommandRecently.has(from);

/**
 * Add number to filter
 * @param  {String} from
 */
var addFilter = (from, cl) => {
  usedCommandRecently.add(from);
  setTimeout(() => usedCommandRecently.delete(from), cl); // 5sec is delay before processing next command
};

module.exports = {
  isFiltered,
  addFilter,
};
