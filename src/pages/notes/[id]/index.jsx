/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';

const Note = ({ note }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>{note.title}</h1>
    </div>
  );
};

export const getServerSideProps = async ({ params, req, res }) => {
  const response = await fetch(
    `${process.env.API_URL || 'http://localhost:3000'}/api/notes/${params.id}`
  );

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return { props: { note: data } };
};

export default Note;
