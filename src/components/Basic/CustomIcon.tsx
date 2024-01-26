export default function CustomIcon({ name, color = 'white' }: { name: string, color: string }) {
  switch (name) {
    case "close":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path d="M0 0H2V2H0V0Z" fill="currentColor" />
          <path d="M4 4H2V2H4V4Z" fill="currentColor" />
          <path d="M6 6H4V4H6V6Z" fill="currentColor" />
          <path
            d="M8 6H6V8H4V10H2V12H0V14H2V12H4V10H6V8H8V10H10V12H12V14H14V12H12V10H10V8H8V6Z"
            fill="currentColor"
          />
          <path d="M10 4V6H8V4H10Z" fill="currentColor" />
          <path d="M12 2V4H10V2H12Z" fill="currentColor" />
          <path d="M12 2V0H14V2H12Z" fill="currentColor" />
        </svg>
      );
    case "max":
      return (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H15.5556V14H0V0ZM14 12.4444V3.11111H1.55556V12.4444H14Z"
            fill="currentColor"
          />
        </svg>
      );
    case "min":
      return (
        <svg
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <line y1="1" x2="12" y2="1" stroke="currentColor" stroke-width="2" />
        </svg>
      );
    case "muted":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 2H11V22H9V20H7V18H9V6H7V4H9V2ZM5 8V6H7V8H5ZM3 10H5V8H3H1V10V14V16H3H5V18H7V16H5V14H3V10Z"
            fill="currentColor"
          />
          <rect x="14.9998" y="11" width="2" height="2" fill="currentColor" />
          <rect x="13" y="9" width="2" height="2" fill="currentColor" />
          <rect x="16.9998" y="13" width="2" height="2" fill="currentColor" />
          <rect x="16.9998" y="9" width="2" height="2" fill="currentColor" />
          <rect x="13" y="13" width="2" height="2" fill="currentColor" />
        </svg>
      );
    case "next":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 4H8V6H10V8H12V10H14V14H12V16H10V18H8V20H6V4ZM18 4H16V20H18V4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "pause":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 4H5V20H10V4ZM19 4H14V20H19V4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20H8V4H10V6H12V9H14V11H16V13H14V15H12V18H10V20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 4H13V6V11H20V13H13V18V20H11V18V13H4V11H11V6V4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "prev":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 4H8V20H6V4ZM18 4H16V6H14V9H12V11H10V13H12V16H14V18H16V20H18V4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "stop":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <rect x="6" y="6" width="12" height="12" fill="currentColor" />
        </svg>
      );
    case "trash":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9995 2H15.9998V4H15.9995V6H17.9995H19.9995H21.9995V8H19.9995V20H19.9998V22L19.9995 22H17.9995H5.99976L3.99976 22V20V8H1.99951V6H3.99976H5.99976H7.99976V4V2H9.99976H13.9995H15.9995ZM13.9995 4H9.99976V6H13.9995V4ZM13.9995 8H9.99976H7.99976L5.99976 8V20H17.9995V8L15.9995 8H13.9995ZM8.99951 10H10.9995V18H8.99951V10ZM14.9998 10H12.9998V18H14.9998V10Z"
            fill="currentColor"
          />
        </svg>
      );
    case "undo":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4H10V6H8V4ZM18 10V8H8V6H6V8H4V10H6V12H8V14H10V12H8V10H18ZM18 18V10H20V18H18ZM18 18V20H12V18H18Z"
            fill="currentColor"
          />
        </svg>
      );
    case "volume":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 2H9V4H7V6H5V8H3H1V10V14V16H3H5V18H7V20H9V22H11V2ZM7 18V16H5V14H3V10H5V8H7V6H9V18H7ZM13 10H15V14H13V10ZM21 4H19V2H13V4H19V6H21V18H19V20H13V22H19V20H21V18H23V6H21V4ZM19 8H17V6H13V8H17V16H13V18H17V16H19V8Z"
            fill="currentColor"
          />
        </svg>
      );
  }
  return "?";
}
