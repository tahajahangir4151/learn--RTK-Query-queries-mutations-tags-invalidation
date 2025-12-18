import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        RTK Query Practice with both api fetching at server side and client side
      </h1>
      <Link href={"/posts"}>
        <button
          style={{
            height: "50px",
            width: "120px",
            marginTop: "10px",
            backgroundColor: "blue",
            cursor: "pointer",
            border: "none",
          }}
        >
          Get Posts
        </button>
      </Link>
      <div>
        <Link href={"/users"}>
          <button
            style={{
              height: "50px",
              width: "120px",
              marginTop: "10px",
              backgroundColor: "blue",
              cursor: "pointer",
              border: "none",
            }}
          >
            Get Users
          </button>
        </Link>
      </div>
    </div>
  );
}
