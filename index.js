const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(cat) {
    const newCats = [...cats, cat];
    return newCats;
}

function prependCat(cat) {
    const newCats = [cat, ...cats];
    return newCats;
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}