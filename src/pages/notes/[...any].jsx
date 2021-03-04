import React from 'react';
import { useRouter } from 'next/router';

// any route
const NoteAnyPage = () => {
  const router = useRouter();
  const { any } = router.query;

  return <div>Note Any Page - {!!any && any.join('/')}</div>;
};

export default NoteAnyPage;
