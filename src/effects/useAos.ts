import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (config: AOS.AosOptions | undefined) => {
  AOS.init(config);
};

export default useAOS;
