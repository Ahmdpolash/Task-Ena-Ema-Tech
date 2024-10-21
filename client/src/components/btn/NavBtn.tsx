import Link from "next/link";

const NavBtn = () => {
  return (
    <>
      <Link href={"/sign-in"}>
        <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#394481]  font-medium">
          <div className="inline-flex h-10 translate-y-0 items-center justify-center px-6  bg-gradient-to-r dark:from-[#406BBF] dark:to-[#345699] dark:text-white text-black transition duration-500 group-hover:-translate-y-[150%] tracking-wide">
            Sign In
          </div>
          <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#394481] dark:bg-[#656fe2] transition duration-500 group-hover:translate-y-0 group-hover:scale-150 tracking-wide"></span>
            <span className="z-10"> Sign In</span>
          </div>
        </button>
      </Link>
    </>
  );
};

export default NavBtn;
