export const headStyle = `
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #AFEEEE;
  }

  .container {
    width: min(100% - 40px, 1280px);
    margin-inline: auto;
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }

  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .movie__image {
    width: 100%;
    object-fit: cover;
  }

  .search {
    margin-bottom: 30px;
  }

  .search__label-input {
    display: block;
    margin-bottom: 7px;
  }

  .search__input {
    display: block;
    max-width: 400px;
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid lightsteelblue;
  }

  .search__label-checkbox {
    font-size: 0.8rem;
    user-select: none;
  }

  .search__group--input {
    margin-bottom: 7px;
  }
  
  .search__group--checkbox {
    display: flex;
    gap: 5px;
    align-items: center;
  }`;
