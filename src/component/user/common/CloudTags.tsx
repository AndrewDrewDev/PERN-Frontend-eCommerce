import { FC, ReactElement } from "react";
import { categoriesPageStore } from "../../../store/CategoriesPageStore";
import { CloudTagsItem } from "./CloudTagsItem";

const CloudTags: FC = (): ReactElement => {
  return (
    <>
      {categoriesPageStore.category1 ? (
        <div className="hidden md:block mt-5 bg-cover bg-opacity-50 
        bg-gray-200 bg-center rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-between">
            <h2 className="mt-3 mb-1 text-xl font-semibold text-gray-700
             hover:underline rounded-full px-3 py-1 hover:text-white 
             duration-500 hover:bg-blue-600 text-center">
              Каталог :: Облако-Тегов :: Основные Категории
            </h2>
            <ul className="mb-10 mx-auto tag-cloud text-center text-gray-600 
            w-11/12">
              {categoriesPageStore.category1.map((item) => (
                <CloudTagsItem item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {categoriesPageStore.category2 ? (
        <div className="hidden md:block mt-5 bg-cover bg-opacity-50 
        bg-gray-200 bg-center rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-between">
            <h2 className="mt-3 mb-1 text-xl font-semibold text-gray-700 
            hover:underline rounded-full px-3 py-1 hover:text-white 
            duration-500 hover:bg-blue-600 text-center">
              Каталог :: Облако-Тегов :: Дополнительные ПодКатегории
            </h2>
            <ul className="mb-10 mx-auto tag-cloud text-center text-gray-600
             w-11/12">
              {categoriesPageStore.category2.map((item) => (
                <CloudTagsItem item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {categoriesPageStore.category3 ? (
        <div className="hidden md:block mt-5 bg-cover bg-opacity-50
         bg-gray-200 bg-center rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-between">
            <h2 className="mt-3 mb-1 text-xl font-semibold text-gray-700
             hover:underline rounded-full px-3 py-1 hover:text-white
              duration-500 hover:bg-blue-600 text-center">
              Каталог :: Облако-Тегов :: Ключевые Слова :: Метки
            </h2>
            <ul className="mb-10 mx-auto tag-cloud text-center text-gray-600
             w-11/12">
              {categoriesPageStore.category3.map((item) => (
                <CloudTagsItem item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export { CloudTags };
