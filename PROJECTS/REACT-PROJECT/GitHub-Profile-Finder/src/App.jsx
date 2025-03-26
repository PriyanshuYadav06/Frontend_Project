import { useEffect, useState } from "react";
import "./App.css";
import Input from "./component/Input";
import Image from "./component/Image";
import Intial from "./component/Intial";
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from "react-spinners";
function App() {
  const [user, setUser] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (user == "") {
      setFlag(false);
      setIsLoading(true);
    }
  }, [user, isLoading]);
  useEffect(() => {
    if (flag) {
      fetch(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));

    }
  },[flag]);
  return (
    <div className="flex flex-col justify-center items-center gap-y-12 ">
      <Input
        setFlag={setFlag}
        flag={flag}
        onChnage={(e) => {
          setUser(e.target.value);
        }}
        onClick={() => {
          setFlag(true);
        }}
      />
      {flag ? (
        <div className="w-[100%] flex flex-col border-1 items-center gap-y-6 border-white rounded-[8px] p-6">
          {isLoading ? (
            <BeatLoader color="#ba3636" />
          ) : (
            <>
              <Image src={data.avatar_url} />
              <div className="flex gap-x-2.5">
                <a href={data.html_url} target="_blank">
                  {data.login}
                </a>
                <span>
                  User Joined on{" "}
                  {new Date(data.created_at).toLocaleDateString("en-GB")}
                </span>
              </div>
              <div>Public Repos:{data.public_repos}</div>
              <div>Followers:{data.followers}</div>
              <div>Following:{data.following}</div>
            </>
          )}
        </div>
      ) : (
        <Intial />
      )}
    </div>
  );
}
export default App;
