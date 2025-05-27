import Image from "next/image";
import Container from "../Container/Container";
import logo from "../../../public/abir.png";
const DesktopNav = () => {
  return (
    <Container>
      <div className="mt-20 ">
        <div className="w-40 h-40 aspect-square relative">
          <Image className="object-contain" fill src={logo} alt="logo"></Image>
        </div>
      </div>
    </Container>
  );
};

export default DesktopNav;
