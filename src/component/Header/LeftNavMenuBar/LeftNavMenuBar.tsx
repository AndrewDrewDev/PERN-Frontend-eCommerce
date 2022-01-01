import { Dispatch, ReactElement, SetStateAction } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { animated, config, useTransition } from "react-spring";

import { categoriesPageStore } from "../../../store/CategoryStore";
import { TCategoryInfoByLevel } from "../../../types";
import {navLinks, NavLinkItemProps} from './navLinks'
import { nanoid } from "nanoid";


interface LeftNavMenuBarProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const LeftNavMenuBar: FC<LeftNavMenuBarProps> = ({
                                                   show,
                                                   setShow
                                                 }): ReactElement => {

  const modalTransition = useTransition(show, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -100, opacity: 0 },
    config: config.gentle
  });

  const bgTransition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {bgTransition(
        (style, item) =>
          item && (
            <animated.div
              key={nanoid()}
              className="fixed z-50 inset-0 h-screen w-screen bg-black bg-opacity-75"
              onClick={() => setShow(false)}
              style={style}
            >
              {modalTransition((style, item) => {
                return (
                  item && (
                    <animated.div
                      key={nanoid()}
                      onClick={e => e.stopPropagation()}
                      className="fixed z-30 left-0 top-0 bg-white max-w-xs w-full
            h-full px-6 py-4 border-r-2 border-gray-300 overflow-auto
            pretty-scroll "
                      style={style}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium text-gray-700">
                          Навигация
                        </h3>
                        <button
                          className="border-2 duration-500 border-white focus:outline-none
            hover:border-red-500 p-1 hover:text-white hover:bg-red-400
              rounded-full text-gray-600 focus:outline-none"
                          onClick={() => setShow(false)}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <hr className="my-3" />
                      <div className="md:flex flex-col md:flex-row w-full">
                        <nav
                          className="flex-grow md:block px-4 pb-4 md:pb-0
            md:overflow-y-auto block"
                        >
                          {navLinks.map(link => (
                            <div key={link.name} onClick={() => setShow(false)}>
                              <NavLinkItem {...link} />
                            </div>
                          ))}
                          <div className="mt-10 flex flex-col justify-center">
                            <h3 className="text-xl font-medium text-gray-700">
                              Основные категории:
                            </h3>
                            {categoriesPageStore.category1Info
                              ? categoriesPageStore.category1Info.map(
                                category => (
                                  <div
                                    key={category.url}
                                    onClick={() => setShow(false)}
                                  >
                                    <CategoryLinkItem {...category} />
                                  </div>
                                )
                              )
                              : null}
                          </div>
                        </nav>
                      </div>
                    </animated.div>
                  )
                );
              })}
            </animated.div>
          )
      )}
    </>
  );
};


const NavLinkItem: FC<NavLinkItemProps> = ({ name, url, svg }): ReactElement => {
  return (
    <Link
      className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900
      bg-gray-200 rounded-lg hover:underline hover:bg-blue-200 shadow-lg
        border-2 border-gray-200 hover:border-blue-300 duration-500"
      to={url}
    >
      <div className="flex items-center">
        {svg}
        <span className="pl-2">{name}</span>
      </div>
    </Link>
  );
};

const CategoryLinkItem: FC<TCategoryInfoByLevel> = (props): ReactElement => {
  const { name, url, count } = props;
  return (
    <div
      className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900
           bg-gray-200 rounded-lg hover:underline hover:text-white
           hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-400
           duration-500 shadow-lg"
    >
      <Link to={"/category/" + url}>
        <div className="flex items-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="pl-2">
            {name} ({count}+)
          </span>
        </div>
      </Link>
    </div>
  );
};

export { LeftNavMenuBar };
