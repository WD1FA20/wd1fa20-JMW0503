var q = document.getElementsByTagName('q').innerText;

var i;

for (i=0; i < q.length; i++) {
  let blockQuote = document.createElement('BLOCKQUOTE').parentNode;

  let insert = blockQuote.classList.add('pullquote');

  let insertedNode = insert.insertBefore(blockQuote, q);

  
}

