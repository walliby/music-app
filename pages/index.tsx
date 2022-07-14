import { useEffect } from "react";
import fetcher from "../lib/fetcher";

const Home = () => {
  useEffect(() => {
    fetcher("/me");
  }, []);
  return <div>Home</div>;
};

export default Home;
