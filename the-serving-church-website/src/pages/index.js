import Link from 'next/link';
import BlogPost from './BlogPost';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <p>Here are the latest posts:</p>
      <ul>
        <li>
          <Link href="/posts/first-post">
            First post
          </Link>
        </li>
        <li>
          <Link href="/posts/second-post">
            Second post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;