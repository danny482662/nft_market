import Style from "../styles/index.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "@/components/Service/Service";
import BigNFTSlider from "@/components/BigNFTSlider/BigNFTSlider";
import Subscribe from "@/components/Subscribe/Subscribe";
import Title from "../components/Title/Title";
import Category from "@/components/Category/Category";
import Filter from "@/components/Filter/Filter";
import NFTCard from "@/components/NFTCard/NFTCard";
import Collection from "@/components/Collection/Collection";
import FollowerTab from "@/components/FollowerTab/FollowerTab";
import AudioLive from "@/components/AudioLive/AudioLive";
import Slider from "@/components/Slider/Slider";
import Brand from "@/components/Brand/Brand";
import Video from "@/components/Video/Video";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <AudioLive />
      <Title
        heading="Future NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <FollowerTab />
      <Slider />
      <Collection />

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs and Categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
