import Link from "next/link";

export const Breadcrumb = ({crumb, isVisible=true}) => {
    let urlPath = '';

    const crumbs = crumb.map((item, idx) => {
        urlPath += `/${item}`; 
        return (
            <div
                key={`${item}${idx}`}
                className="flex font-medium capitalize cursor-pointer hover:text-primary-500 font-secondary"
            >
                <Link href={`${urlPath}`} passHref>
                    <p>{idx === 0? 'Home':item}</p>
                </Link>
                {idx !== crumb.length-1 && <span className="material-symbols-outlined">
                    chevron_right
                </span>}
            </div>
        );
    })

    return (
        <div className={"flex py-2 pr-16 mt-20 text-black pl-7 sm:pl-9 lg:px-16 "+ (isVisible?'':'hidden')}>
            {crumbs}
        </div>
    );
}