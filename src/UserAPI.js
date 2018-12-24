export const getShelve = (shelveId) => 
    JSON.parse(localStorage.getItem(shelveId));

export const saveBook = (shelveId, bookId) => {
    if (![...getShelve(shelveId)].includes(bookId)) {
        [...getShelve(1)].splice([...getShelve(1)].indexOf(bookId), 1);
        [...getShelve(2)].splice([...getShelve(1)].indexOf(bookId), 1);
        [...getShelve(3)].splice([...getShelve(1)].indexOf(bookId), 1);
        
        let booksId = [...getShelve(shelveId), bookId]
        localStorage.setItem(shelveId, JSON.stringify(booksId))
    }
}