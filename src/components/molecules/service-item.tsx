import Image from "next/image";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = (props: ServiceItemProps) => {
  const { title, description } = props;

  return (
    <div className="flex items-start gap-4">
      <Image
        src="/assets/images/service-icon.svg"
        width={50}
        height={50}
        alt="service-icon"
      />
      <div className="flex flex-col">
        <h2 className="font-semibold text-white text-sm md:text-base">
          {title}
        </h2>
        <p className="font-light text-[#887DAB] text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
