import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons";

const Navbar = () => {
  return (
    <div className="p-3 navbar flex justify-between align-center">
      <div className="logo">
        <img
          src="/src/assets/images/Logo-UN-CHK-1-UN.png"
          alt=""
          className="w-10"
        />
      </div>
      <div>
        {/* <p>Moussa Touré</p> */}

        <Menu as="div" className="relative inline-block text-left bottom-2">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              Options
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Mon profil
                </a>
              </MenuItem>
              <form action="#" method="POST">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Se déconnecter
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
