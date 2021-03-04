import nc from 'next-connect';
import cors from 'cors';

export default nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('API');
  });
