import { ReactElement } from "react";

export interface NavLinkItemProps {
  name: string;
  url: string;
  svg: ReactElement;
}

export const navLinks: NavLinkItemProps[] = [
  {
    name: "Главная",
    url: "/",
    svg: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    )
  },
  {
    name: "Каталог",
    url: "/catalog",
    svg: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    name: "Акции",
    url: "/label/Aktsii",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          d="M21,5h-1h-2H6H4H3C2.447,5,2,5.447,2,6v1v1.938V10h0.893c0.996,0,1.92,0.681,2.08,1.664C5.177,12.917,4.215,14,3,14H2 v1.062V17v1c0,0.553,0.447,1,1,1h1h2h12h2h1c0.553,0,1-0.447,1-1v-1v-1.938V14c0,0-0.447,0-1,0c-1.215,0-2.177-1.083-1.973-2.336 c0.16-0.983,1.084-1.664,2.08-1.664H22V8.938V7V6C22,5.447,21.553,5,21,5z M9,9c0.553,0,1,0.447,1,1s-0.447,1-1,1s-1-0.447-1-1 S8.447,9,9,9z M8.2,15.4l6-8L15.8,8.6l-6,8L8.2,15.4z M15,15c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S15.553,15,15,15z" />
      </svg>
    )
  },
  {
    name: "Новинки",
    url: "/label/Novinki",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 77.11499786376953 76.5260238647461"
      >
        <path
          d="M77.115 38.223c0-.885-.435-1.663-1.097-2.151l.014-.024-9.324-5.383 5.367-9.296-.018-.011a2.666 2.666 0 0 0-.127-2.408 2.667 2.667 0 0 0-2.025-1.314v-.026H59.137V6.873h-.022a2.667 2.667 0 0 0-1.314-2.022 2.662 2.662 0 0 0-2.412-.125l-.013-.023-9.481 5.474-5.25-9.094-.019.011A2.668 2.668 0 0 0 38.477 0c-.885 0-1.664.435-2.151 1.097l-.024-.014-5.337 9.244-9.19-5.306-.011.019a2.666 2.666 0 0 0-2.408.127 2.666 2.666 0 0 0-1.315 2.025h-.027v10.674H7.402v.021a2.667 2.667 0 0 0-2.022 1.314 2.667 2.667 0 0 0-.126 2.41l-.023.014 5.246 9.087-9.394 5.424.011.019A2.668 2.668 0 0 0 0 38.304c0 .885.435 1.664 1.097 2.151l-.014.024 9.324 5.383-5.367 9.296.018.01a2.666 2.666 0 0 0 .127 2.408A2.667 2.667 0 0 0 7.21 58.89v.027h10.767v10.736h.022c.092.816.549 1.58 1.314 2.022a2.665 2.665 0 0 0 2.412.125l.013.023 9.481-5.474 5.25 9.094.019-.011a2.668 2.668 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013 5.337-9.244 9.191 5.306.011-.019a2.666 2.666 0 0 0 2.408-.127 2.666 2.666 0 0 0 1.315-2.025h.027V58.661h10.613v-.021a2.667 2.667 0 0 0 2.022-1.314 2.67 2.67 0 0 0 .126-2.411l.023-.013-5.246-9.087 9.394-5.424-.011-.019a2.666 2.666 0 0 0 1.094-2.149zM32.272 49.618l-9.846-4.35 4.345 7.525-2.456 1.418-6.662-11.537 2.525-1.459 9.53 4.162-4.185-7.248 2.457-1.418 6.66 11.537-2.368 1.37zm4.652-2.686l-6.661-11.538 8.165-4.713 1.248 2.162-5.709 3.295 1.398 2.422 5.587-3.225 1.248 2.16-5.587 3.227 1.518 2.629 5.709-3.295 1.248 2.162-8.164 4.714zM55.83 36.017l-6.598-6.754 2.567 9.08-2.611 1.508-9.965-9.629 2.75-1.588 6.838 7.168-2.617-9.605 1.92-1.108 6.993 7.079-2.79-9.506 2.75-1.588 3.375 13.436-2.612 1.507z" />
      </svg>
    )
  },
  {
    name: "О магазине",
    url: "/info/about",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    name: "Оплата",
    url: "/info/payment",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    name: "Доставка",
    url: "/info/delivery",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path
          d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
      </svg>
    )
  },
  {
    name: "Корзина",
    url: "/payment",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    name: "Авторизация",
    url: "/login",
    svg: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3 c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2 C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z" />
      </svg>
    )
  }
];
