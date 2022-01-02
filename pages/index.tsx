import LinkGenerator from '@comp/LinkGenerator';
import MetatagConfig from '@comp/MetatagManager';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <MetatagConfig defaultTitleFormat={true} title="Things 3 - Generate new Homework" description="Generate a new Task in Things 3. Link support must be enabled." />
      <LinkGenerator />
    </div>
  )
};

export default Home;