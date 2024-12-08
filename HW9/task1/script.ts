type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
    const sortedArray = [...arr];

    sortedArray.sort((a, b) => {
        if (direction === "asc") {
            return a.localeCompare(b);
        } else if (direction === "desc") {
            return b.localeCompare(a);
        }
        return 0; 
    });

    return sortedArray;
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
