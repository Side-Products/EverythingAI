import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoadingContext } from "@/store/LoadingContextProvider";
import ToolCard from "@/components/Cards/ToolCard";

const NewTools = ({ filter, tools, setTools }) => {
  const { setLoading } = useContext(LoadingContext);
  const [hasLoadedOnce, setLoadedOnce] = useState(false);

  const getAllTools = usecallback(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/tools/filtered`, filter, config);
    setTools(data?.tools);
    setLoading({
      status: false,
    });
  }, [filter, setTools, setLoading]);

  useEffect(() => {
    if (hasLoadedOnce) {
      setLoading({
        status: true,
        title: "Applying Filterrrrr...",
      });
      getAllTools();
    } else {
      setLoadedOnce(true);
    }
  }, [filter, getAllTools, hasLoadedOnce, setLoading]);

  return (
    tools &&
    tools.length > 0 &&
    tools.map((tool) => <ToolCard key={tool._id} tool={tool} />)
  );
};

export default NewTools;
