import { BlankStarIcon, FullStarIcon, HalfStarIcon } from "../icons/Icons";

export const Stars = ({ rating }) => {
    const ratingStar = Array.from({ length: 5 }, (value, i) => {
        let number = i + 0.5;

        return (
            <span key={i} className="w-5">
                {rating >= i + 1 ? (<FullStarIcon className={"w-4"} />) : rating >= number ? (<HalfStarIcon className={"w-4"} />) : <BlankStarIcon className={"w-4"} />}
            </span>
        )
    });


    return (
        <div className="flex">{ratingStar}</div>
    )
}
