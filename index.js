/* eslint-disable max-classes-per-file */

import {
  form,
  addButton,
  titleInput,
  authorInput,
  booksContainer,
  listSectionBtn,
  formSectionBtn,
  contactSectionBtn,
  librarySection,
  formSection,
  contactSection,
} from './modules/queries';

import Library from './modules/Library';
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const library = new Library();
library.updateBooks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = titleInput.value;
  const Author = authorInput.value;
  const newBook = new Book(Title, Author, Date.now());
  library.bookList.push(newBook);
  library.updateBooks();
  form.reset();
});

function toggleDisplaySection(id) {
  if (id === 'list-btn') {
    librarySection.classList.remove('hide');
    formSection.classList.add('hide');
    contactSection.classList.add('hide');
  } else if (id === 'new-btn') {
    librarySection.classList.add('hide');
    formSection.classList.remove('hide');
    contactSection.classList.add('hide');
  } else if (id === 'contact-btn') {
    librarySection.classList.add('hide');
    formSection.classList.add('hide');
    contactSection.classList.remove('hide');
  }
}

listSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});

formSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});

contactSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});
