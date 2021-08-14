import { FC, ReactElement } from "react";
import { TCategoryData } from "../../../store/CategoriesPageStore";

type TCloudTagsItem = {
  item: TCategoryData;
};

const CloudTagsItem: FC<TCloudTagsItem> = ({ item }): ReactElement => {
  const getRandomValue = (max: number): number => {
    return Math.floor(Math.random() * max) + 1;
  };

  return (
    <li className="inline-flex px-1 duration-500 hover:underline rounded-full
     hover:text-white hover:bg-blue-600" style={{
        fontSize: `1.${getRandomValue(3)}rem`
     }}>
      {item.name}({item.count})
    </li>
  );
};

export { CloudTagsItem };
