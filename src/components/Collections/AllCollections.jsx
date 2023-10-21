import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollections } from "@/redux/actions/collectionActions";
import CollectionCard from "@/components/Cards/CollectionCard";

export default function AllCollections() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCollections());
  }, [dispatch]);

  const { collections } = useSelector((state) => state.allCollections);

  return (
    <div>
      <h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[70px] leading-[120px] font-bold text-center tracking-[-1px] text-gradient-primary-tr">
        Collections
      </h1>
      {collections && collections.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-12">
          {collections.map((collection) => (
            <CollectionCard key={collection._id} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
}
