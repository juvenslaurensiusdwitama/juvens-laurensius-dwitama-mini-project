export default function Categories() {
    return(
        <div>
            <div className="relative">
                <button>
                    Genres
                    {/* buat 2 icon if isOpened true panah kebawah
                    if isOpened false maka panah kearah kanan (nilai default) */}
                </button>
                {/* logic buat munculin menunya (dibuat absolut ketika isOpened true) */}
            </div>
            <div className="relative">
                <button>
                    Released
                    {/* buat 2 icon if isOpened true panah kebawah
                    if isOpened false maka panah kearah kanan (nilai default) */}
                </button>
                {/* logic buat munculin menunya (dibuat absolut ketika isOpened true) */}
            </div>
        </div>
    )
};
