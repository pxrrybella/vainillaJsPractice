//CHALLENGE - Books

const Book = class {
    constructor(
        title,
        author,
        pages,
        currentPage
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.currentPage = currentPage;
    }
    updateCurrentPage(newCurrentPage){
        this.currentPage = newCurrentPage;
    }
}

const bookOne = new Book(
    "La polilla del bahúl",
    "Carlos Saraniti, Mario Carvajal",
    40,
    40
)

const bookTwo = new Book(
    "Rebelión en la granja",
    "George Orwell",
    160,
    160
)

const bookThree = new Book(
    "El poder de la disciplina",
    "Raimon Samsó",
    150,
    30
)

const bookFour = new Book(
    "Ensayo sobre la ceguera",
    "José Saramago",
    384,
    384
)

const bookFive = new Book(
    "Rebeldes",
    "Susan E. Hinton",
    208,
    208
)