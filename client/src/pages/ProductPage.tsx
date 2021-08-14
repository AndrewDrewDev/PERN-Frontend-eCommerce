import { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../component/user/product/Breadcrumb";
import { ProductSlider } from "../component/user/product/Slider";
import { TFullProductData } from "../store/types";

const ProductPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams();

  const data: TFullProductData = {
    d691_exCategory1: "Категория1",
    d692_exCategory2: "Категория2",
    d693_exCategory3: "Категория3",
    d691_exCategory1EN: "Kategoria1",
    d692_exCategory2EN: "Kategoria2",
    d693_exCategory3EN: "Kategoria3",
    d720_exProductID: "0115-0101-00016",
    d721_exProductName: "Название товара",
    d734_exProductNew: "",
    d735_exProductDiscounts: "@",
    d802_exPriceSell: "310.00",
    d781_exEd: "шт.",
    d723_exProductDescription: "Описание товара",
    d748_exProductAmountRemaind: "",
    d722_exProductInStock: "да",
    d747_exProductCodeVender: "",
    d803_exPriceOldSell: "400.00",
    d738_exProductManufacturer: "",
    REST_imgUrl: {
      preview:
        "https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg",
      other: [
        "https://siteup.com.ua/demo/msk/tupperware/img-product/A03-1b.jpg",
        "https://siteup.com.ua/demo/msk/tupperware/img-product/A03-2b.jpg",
        "https://siteup.com.ua/demo/msk/tupperware/img-product/A03-1b.jpg",
        "https://siteup.com.ua/demo/msk/tupperware/img-product/A03-2b.jpg",
      ],
    },
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-700 text-3xl title-font font-medium mb-1">
        {data.d721_exProductName}
      </h1>
      <Breadcrumb
        category1={data.d691_exCategory1}
        category1EN={data.d691_exCategory1EN}
        category2={data.d692_exCategory2}
        category2EN={data.d692_exCategory2EN}
        category3={data.d693_exCategory3}
        category3EN={data.d693_exCategory3EN}
        finalName={data.d721_exProductName}
      />
      <div className="mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full object-cover object-center">
          <ProductSlider />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">222</div>
        {/* <Description/> */}
      </div>
      {/* <TabsPanel/> */}
      {/* Акции */}
      {/* Новинки */}
    </div>
  );
};

export { ProductPage };
