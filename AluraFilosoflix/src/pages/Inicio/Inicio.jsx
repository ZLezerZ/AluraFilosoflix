import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { ContextoGlobal } from "../../Components/ContextoGlobal/ContextoGlobal";

const Inicio = () => {

  const {videos} = useContext(ContextoGlobal);

  return (
    <div>
      <Banner/>
          {videos.map((video) => {
            return (
              <Carta {...video} key={video.id}/>
            )
          })}
    </div>
  )
}

export default Inicio;