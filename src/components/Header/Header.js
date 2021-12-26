import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { authActions } from "../../redux/actions";

const navigation = [{ name: "Logout", href: "#", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Disclosure as="nav">
      <div className="max-w-7xl border-b-[#4D618E] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl text-white">
                My<span className="text-[#43AFFF]">Jobs</span>
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user ? (
              <>
                <NavLink to="/post-job" className="p-1 rounded-full text-white">
                  Post A Job
                </NavLink>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-cyan-950">
                        {user.name[0]?.toUpperCase()}
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                            )}
                            onClick={handleLogout}
                          >
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <NavLink
                end
                to="/login"
                className={({ isActive }) =>
                  `group relative w-full flex justify-center py-2 px-4 border border-blue text-sm font-medium rounded-md text-white bg-[#43AFFF33] hover:bg-blue focus:ring-2 focus:ring-offset-2 ${
                    isActive ? " hidden" : ""
                  }`
                }
              >
                Login/Signup
              </NavLink>
            )}
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Header;
