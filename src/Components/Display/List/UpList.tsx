const style = `ol {
    /* Give our counter a name, any name will do */  
    counter-reset: ordered-list;
  }
  
  ol li {
    /* Indicate that we should increment the count
       for every list item */
    counter-increment: counts;
    list-style: none;
  }
  
  ol li:before {
    /* Use the count in the :before pseudoelement */
    content: counter(counts) '. ';
    display: inline-block;
    color: deeppink;
    font-family: 'Pacifico', cursive;
    width: 32px;
  }`