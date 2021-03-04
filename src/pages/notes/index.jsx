/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const NotesPage = ({ notes }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map((note, index) => (
          <div key={index} sx={{ width: '33%', p: 2 }}>
            <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL || 'http://localhost:3000'}/api/notes/`);
  const { data } = await res.json();

  return { props: { notes: data } };
};

export default NotesPage;
