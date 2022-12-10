import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const WorkList = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1 ">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web1}
          alt="rakib"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web2}
          alt="rakib"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web3}
          alt="rakib"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web4}
          alt="rakib"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web5}
          alt="rakib"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web6}
          alt="rakib"
        />
      </div>
    </div>
  );
};

export default WorkList;
