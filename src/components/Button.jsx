import Link from "next/link";

// disabble --- true dont show href
const Button = ({ text, href, disable }) => {
  const allowedHref = disable ? "#" : href;
  return (
    <>
      <button className="w-96">
        {" "}
        <Link href={allowedHref}>
          <a
            className={` ${
              disable && "cursor-not-allowed"
            } bg-gradient-to-r from-purple-400 via-purple-400 to-fuchsia-400 pl-2 pr-5 py-3 rounded-lg hover:opacity-90`}
          >
            <span className="text-white font-semibold text-2xl">{text}</span>
          </a>
        </Link>
      </button>
    </>
  );
};

export default Button;
