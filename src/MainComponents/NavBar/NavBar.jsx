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
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;
  console.log(user);
  const navData = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/startups"> Startups</NavLink>
      <NavLink href="/opportunities"> Opportunities</NavLink>
    </>
  );

  const priveteNav = (
    <>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/profile"> Profile</NavLink>
    </>
  );

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navData}
            </ul>
          </div>
          <Link
            href="/"
            className="inline-block font-extrabold text-xl bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Startup Hub
          </Link>{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{navData}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div>
              {isPending ? (
                <span className="loading loading-spinner text-purple-500"></span>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Image
                        src={user?.image || "/default-avatar.png"}
                        height={70}
                        width={70}
                        alt="user image"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm space-y-2 py-4 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    {priveteNav}
                    <Link
                      onClick={handleLogout}
                      className="btn btn-error text-white font-bold text-[15px]"
                      href={"/login"}
                    >
                      Logout
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-5">
              <Link
                href={"/login"}
                className="btn bg-purple-500 text-white font-bold text-[15px]"
              >
                Login
              </Link>
              <Link
                href={"/signup"}
                className="btn bg-purple-500 text-white font-bold text-[15px]"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
