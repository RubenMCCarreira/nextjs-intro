/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';

const NoteEdit = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note Edit: {id}</h1>
    </div>
  );
};

export default NoteEdit;
