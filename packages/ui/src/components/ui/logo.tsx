import { forwardRef } from "react";

const Logo = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M192.5 16.6c-37.6 3.5-62.1 10.2-90.7 24.5C34.6 74.8-5.1 139 .8 204.3c3.2 35 14.9 61.8 40.8 93.5l2.8 3.3-20.6 20.7C12.5 333.2 2.4 344 1.5 345.9c-2.2 4.5-1.4 11.3 2 15.7 5.2 6.9-1 6.6 119.5 6.1 116.6-.4 113.6-.3 138.2-5.7 97.8-21.7 164-102.6 153.7-187.5-9.6-79-80.7-142.9-173.6-156-10.5-1.5-40.8-2.7-48.8-1.9zm120.9 130.8c9 6.8 8.6 19-.8 26-2.7 2.1-3.5 2.1-103.2 2.4-111.2.3-104.7.6-110-6.4-2.4-3.1-2.9-4.7-2.9-9.4 0-4.6.5-6.3 2.7-9.2 5.5-7.3-2.1-6.8 109.9-6.5l100.6.2 3.7 2.9zm-64 64c9 6.8 8.6 19-.8 26-2.7 2.1-3.8 2.1-71.2 2.4-75.9.3-72.8.5-78-6.4-2.4-3.1-2.9-4.7-2.9-9.4 0-4.6.5-6.3 2.7-9.2 5.4-7.1 1.5-6.8 77.9-6.5l68.6.2 3.7 2.9z"
      />
      <path
        fill="currentColor"
        d="M447.2 206.8c-3.5 37.8-16.5 70.4-40.4 101.4-29.4 38.1-76.1 68.3-127.3 82.3-29.2 8-46.8 9.5-110.3 9.5h-50.3l4.2 6.3c9.9 14.6 27.8 33.6 41.4 43.9 28 21.2 63.3 36.3 98.5 42.2 20.3 3.3 30.4 3.6 132.9 3.6 97.9 0 102.8-.1 106.7-1.9 7.7-3.5 11.5-13.1 7.9-20.2-.9-1.9-11-12.7-22.3-24.1l-20.6-20.7 2.8-3.3c20.5-25.1 31.6-46.3 37.4-71.3 12.3-53.1-4.2-106.7-45.4-147.9-4.9-4.8-10-9.6-11.5-10.6l-2.5-1.9-1.2 12.7z"
      />
    </svg>
  );
});
Logo.displayName = "Logo";

export { Logo };
