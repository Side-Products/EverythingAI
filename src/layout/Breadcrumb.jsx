import Link from "next/link";

export const Breadcrumb = ({ crumb, isVisible = true }) => {
  let urlPath = "";

  const crumbs = crumb.map((item, idx) => {
    const queryIdx = item.indexOf("?");
    let currCrumb = item;
    if (queryIdx === -1) urlPath += `/${item}`;
    else {
      urlPath += `/${item.substring(0, queryIdx)}`;
      currCrumb = item.substring(0, queryIdx);
    }

    return (
      <div
        key={`${currCrumb}${idx}`}
        className="flex font-medium capitalize cursor-pointer hover:text-primary-500 font-secondary"
      >
        <Link href={`${urlPath}`} passHref>
          <p>
            {idx === 0
              ? "Home"
              : currCrumb
                  .replace(/%20/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
          </p>
        </Link>
        {idx !== crumb.length - 1 && (
          <span className="material-symbols-outlined">chevron_right</span>
        )}
      </div>
    );
  });

  return (
    <div
      className={
        "flex absolute py-2 pr-16 mt-28 lg:mt-32 pb-4 text-black pl-7 sm:pl-9 lg:px-20 " +
        (isVisible ? "" : "hidden")
      }
    >
      {crumbs}
    </div>
  );
};
