import { HomeIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, idx) =>
          idx === 0 ? (
            <li className="inline-flex items-center">
              <a href="/" className="text-white inline-flex items-center">
                <HomeIcon className="w-5 h-5 mr-2.5" />
                Home
              </a>
            </li>
          ) : (
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="w-6 h-6 text-white" />
                {idx === items.length ? (
                  <span className="text-white ml-1 md:ml-2 text-sm font-medium">
                    Post
                  </span>
                ) : (
                  <a
                    href="#"
                    className="text-white ml-1 md:ml-2 text-sm font-medium"
                  >
                    Post
                  </a>
                )}
              </div>
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
