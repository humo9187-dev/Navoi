import { useEventsStore } from '@navoiy-workspace/store';
import {
  NextEventSection,
  Hero,
  LatestNewsSection,
} from '@navoiy-workspace/ui-components';

const Home = () => {
  const iEventsError = useEventsStore((s) => s.errors);
  const hasEventsError = iEventsError.length > 0;

  return (
    <>
      <Hero />
      {!hasEventsError && <NextEventSection />}
      <LatestNewsSection />
    </>
  );
};

export default Home;
