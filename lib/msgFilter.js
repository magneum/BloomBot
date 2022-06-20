const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from,cl) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from),cl) // 5sec is delay before processing next command
}

module.exports = {
    isFiltered,
    addFilter
}
