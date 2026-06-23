"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const {
    data: session,
    isPending, //loading state
    
  } = authClient.useSession();

  const user = session?.user;

  const navData = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/startups"> Startups</NavLink>
      <NavLink href="/opportunities"> Opportunities</NavLink>
    </>
  );

  const priveteNavData = [];

  const priveteNav = {
    admin: "/dashboard/overview",
    founder: "/dashboard/founder-overview",
    collaborator: "/dashboard/collaboratoroverview",
  };

  if (user?.email) {
    priveteNavData.push(
      <NavLink key={user?.role} href={priveteNav[user?.role]}>
        Dashboard
      </NavLink>,
    );
  }

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };
  return (
    <nav className=" shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 z-50 rounded-box  mt-3 w-52 p-2 shadow"
            >
              {navData} {priveteNavData}
            </ul>
          </div>
          <Link
            href="/"
            className="inline-block font-extrabold text-xl bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Startup Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal border border-purple-200 px-2 rounded-full gap-6">
            {navData} {priveteNavData}
          </ul>
        </div>
        {isPending ? (
          <div className="ml-20 md:ml-40">
            <span className="loading loading-spinner  text-purple-500"></span>
          </div>
        ) : (
          <div className="navbar-end">
            {user ? (
              <div className="flex gap-5">
                <h1 className="text-lg w-26 truncate font-medium text-purple-400 hidden sm:block">
                  Hi, {user?.name}
                </h1>
                <div className="avatar">
                  <div className="w-16 rounded-full ring border-2 shadow border-purple-600 ring-purple-600/20">
                    <Image
                      src={user?.image || "/default-avatar.png"}
                      height={40} // Scaled properly for a 40px (w-10) display circle
                      width={40}
                      alt="user image"
                    />
                  </div>
                </div>
                <Link
                  onClick={handleLogout}
                  className="btn btn-error text-white font-bold text-[15px] no-underline"
                  href="/login"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex gap-5">
                <Link
                  href="/login"
                  className="btn bg-purple-500 hover:bg-purple-600 border-none text-white font-bold text-[15px]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="btn bg-purple-500 hover:bg-purple-600 border-none text-white font-bold text-[15px]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
