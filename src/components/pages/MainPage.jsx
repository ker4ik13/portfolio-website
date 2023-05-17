import React from "react";
import Header from "../Header/Header";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import RecentPosts from "../RecentPosts/RecentPosts";
import FeaturedWorks from "../FeaturedWorks/FeaturedWorks";

const MainPage = (props) => {
    return(
        <main className="main">
            <Header/>
            <AboutMe/>
            <Skills/>
            <RecentPosts/>
            <FeaturedWorks/>
        </main>
    )
}

export default MainPage