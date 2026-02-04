import { useState } from "react";
import RuFlag from "../../../public/ru.png";
import AzFlag from "../../../public/aze.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LanguageToggler() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Az");

    const languages = [
        {
            title: "Az",
            flag: AzFlag
        }, {
            title: "Ru",
            flag: RuFlag
        }
    ];

    const availableLangs = languages.filter((lang) => selectedLanguage !== lang.title);

    return (
        <div className="relative">
            <div className="flex items-center border border-gray-200 p-[10px] rounded-[10px] cursor-pointer" onClick={() => {
                setIsHovered(!isHovered);
            }}>
                {languages.map((lang, idx) => {
                    return (
                        <div key={idx}>
                            {lang.title === selectedLanguage ? (
                                <img src={lang.flag} alt={lang.title} className="w-[30px] h-[30px] mr-[10px]" />
                            ) : null}
                        </div>
                    )
                })}
                <p>{selectedLanguage}</p>
                <div>
                    <ArrowDropDownIcon sx={{rotate: isHovered ? "180deg" : 0}}/>
                </div>
            </div>

            {/* dropdown */}
            <ul className={`${isHovered ? "block" : "hidden"} absolute top-[50px] left-[40px] shadow-md border border-gray-300 bg-white rounded-[20px] w-[100px]`}>
                {availableLangs.map((lang, idx) => {
                    return (
                        <li className="flex text-gray-500 items-center justify-center p-[10px] cursor-pointer" key={idx} onClick={() => {
                            setSelectedLanguage(lang.title);
                        }}>
                            <img src={lang.flag} alt={lang.title} className="w-[30px] h-[30px] mr-[10px]" />
                            {lang.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
