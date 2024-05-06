import Categories from "../../components/Categories";
import SocialMedia from "../../components/SocialMedia";

export default function Main() {
    return (
        <main className="mx-[50px] mt-[13px] mb-[77px] bg-[#0A031C] pt-[10px] px-[50px] pb-[47px] rounded-[15px]">
            <div className="pb-[78px]">
                <h1 className="font-medium text-[30px]">Movies</h1>
                <div className="flex justify-between items-center py-[19px]">
                    <h2>MovieVerse movie list offers more than three thousand films for reference, including new releases and premieres</h2>
                    <SocialMedia/>
                </div>
                <Categories/>
            </div>

            {/* For Genre Section (Recommendations, Comedy, Family Cinema, Melodramas, etc) */}
            <div>

            </div>
        </main>
    )
};
