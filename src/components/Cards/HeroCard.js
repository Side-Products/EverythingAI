import Image from "next/image";
import styles from "@/styles/HeroCard/HeroCard.module.css"

export default function HeroCard({logo, name, pricing, category}){
    return (
        <div className={"cursor-pointer relative aspect-square w-[320px] transition-transform group overflow-hidden rounded-xl "+styles['card-container']}>
            <Image className="duration-500 group-hover:scale-110" src={logo} alt="promo card" fill/>
            <div className="absolute bottom-0 w-full p-4 text-white">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex justify-between w-full space-x-3">
                    <p>{pricing}</p>
                    <p>{category}</p>
                </div>
            </div>
        </div>
    );
}