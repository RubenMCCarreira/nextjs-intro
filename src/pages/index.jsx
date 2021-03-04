/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../components/NoSSR'), { ssr: false });

const Index = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <NoSSR />
    </div>
  </div>
);

export const getStaticProps = () => {
  return {
    props: {
      content: {
        title: 'This is a really dope note taking app.',
      },
    },
  };
};

export default Index;
