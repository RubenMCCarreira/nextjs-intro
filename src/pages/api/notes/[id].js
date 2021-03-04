import nc from 'next-connect';
import cors from 'cors';
import notes from '../../../data';

const getById = (id) => {
  const nextId = parseInt(id);
  return notes.find((it) => it.id === nextId);
};

const getIndexById = (id) => {
  const nextId = parseInt(id);
  return notes.findIndex((it) => it.id === nextId);
};

// EXPLANATION:
// get single note
// update single note
// delete single note
export default nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get(async (req, res) => {
    res.send({ data: getById(req.query.id) });
  })
  .put(async (req, res) => {
    const index = getIndexById(req.query.id);

    const newNote = {
      ...notes[index],
      ...req.body,
    };
    notes.splice(index, 1, newNote);

    res.send({ updated: true });
  })
  .delete(async (req, res) => {
    const index = getIndexById(req.query.id);

    notes.splice(index, 1);

    res.send({ deleted: true });
  });
