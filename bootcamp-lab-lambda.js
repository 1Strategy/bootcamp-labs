exports.handler = async (event, context) => {
  // list of random quotes
  const quotes = [
    {
      quote: 'All adventures, especially into new territory, are scary.',
      author: 'Sally Ride'
    },
    {
      quote: 'You can tune a guitar, but you can\'t tuna fish. Unless, of course, you play bass.',
      author: 'Douglas Adams'
    },
    {
      quote: 'Do or do not, there is no try.',
      author: 'Yoda'
    },
    {
      quote: 'Nothing will work unless you do.',
      author: 'Maya Angelou'
    },
    {
      quote: 'The depths of the sea are only water after all.',
      author: 'Virginia Woolf'
    },
    {
      quote: 'The wise man reads both books and life itself.',
      author: 'Lin Yutang'
    }
  ];

  // choose random quote
  let selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // convert JavaScript quote object to JSON and create response object
  let response = {
    body: JSON.stringify(selectedQuote)
  };

  // send our response object
  context.succeed(response);
};
