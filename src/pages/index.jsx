import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page is up!</h2>
      <div className="links">
        <Link href="/dev">Dev page</Link> - it's all happening here!
      </div>
    </div>
  );
};

export default HomePage;
