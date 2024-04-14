// import svg images
import logo from "../../../assets/svg/Tradesutra-logo.svg";
import bell from "../../../assets/svg/bell.svg";
import ellipse from "../../../assets/svg/ellipse.svg";
import help from "../../../assets/svg/help-circle.svg";
import downArrow from "../../../assets/svg/down-arrow.svg";


// import png/jgeg images
import profile from "../../../assets/image/profile.png";


export const Header = () => {
    return (
        <header>
            <div className="flex justify-between shadow-lg shadow-slate-100 px-3">
                {/* logo */}
                <div className="logo ps-10">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                </div>

                {/* options */}
                <div className="header-options">
                    <div className="flex gap-5">
                        <div className="flex gap-3 py-5">

                            {/* notification icon */}
                            <div className="notification relative">
                                <img src={bell} className="w-6 h-6" />

                                <img
                                    src={ellipse}
                                    className="w-3 h-3 absolute top-[1px] right-[-2px]"
                                />
                            </div>

                            {/* helper icon */}
                            <div className="help">
                                <img src={help} className="w-6 h-6" />
                            </div>
                        </div>

                        {/* dropdown */}
                        <div className="flex items-center gap-4 bg-bgModulePage px-5">

                            {/* profile picture */}
                            <div className="profile-image w-6 h-6 overflow-hidden">
                                <img
                                    src={profile}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* admin name */}
                            <div className="admin-name w-20">
                                <p className="text-textBlack text-general leading-4 font-heading">
                                    Linkin
                                </p>
                                <p className="text-textBlack/[75%] text-general leading-4 font-text">
                                    Admin
                                </p>
                            </div>

                            {/* down arrow */}
                            <div className="down-arrow">
                                <img src={downArrow} className="w-2 h-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
