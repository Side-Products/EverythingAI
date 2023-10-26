import { useSelector } from "react-redux";
import CollectionsCarousel from "@/components/Tools/CollectionsCarousel";

const Collections = () => {
  const { collections } = useSelector((state) => state.allCollections);

  return <CollectionsCarousel collections={collections} />;
};

export default Collections;
