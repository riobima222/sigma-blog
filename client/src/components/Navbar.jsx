import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mx-4 mb-6">
      <div className="max-w-[65em] mx-auto flex justify-between">
        <img
          src="/logo-sigma-blog.png"
          alt="Logo-sigma-blog"
          className="w-[5em] h-[5em] "
        />
        <div className="max-w-[40em] w-full flex justify-between items-center">
          <Link>Art</Link>
          <Link>Science</Link>
          <Link>Technology</Link>
          <Link>Cinema</Link>
          <Link>Design</Link>
          <Link>Food</Link>
          <div className="flex max-w-[12em] w-full items-center justify-between">
            <span className="font-bold">Ratna</span>
            <Link className="font-bold bg-[#eb3d4b] py-1 px-2 rounded-md text-white">
              Logout
            </Link>
            <Link
              to={`/write`}
              className="h-[4em] w-[4em] flex justify-center items-center rounded-full bg-[#eb3d4b] tracking-widest text-white font-bold hover:bg-white border-2 border-[#eb3d4b] hover:text-[#eb3d4b] transition-all duration-300"
            >
              <span>Write</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
