import nc from 'next-connect';
import cors from 'cors';
import notes from '../../../data';

// EXPLANATION:
// return all notes
// create a new note
export default nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get(async (req, res) => {
    res.send({ data: notes });
  })
  .post(async (req, res) => {
    const newNote = {
      ...req.body,
      id: Date.now(),
    };
    notes.push(newNote);

    res.send({ created: true });
  });
