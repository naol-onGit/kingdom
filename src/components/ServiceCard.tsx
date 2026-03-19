interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ServiceCard = ({ title, description, image, category }: ServiceCardProps) => {
  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("construct")) return "tag-community";
    if (normalized.includes("maint")) return "tag-lifestyle";
    if (normalized.includes("electr")) return "tag-financing";
    if (normalized.includes("plumb")) return "tag-travel";
    if (normalized.includes("land")) return "tag-growth";
    if (normalized.includes("general")) return "tag-wellness";
    if (normalized.includes("machin")) return "tag-community";
    return "tag-lifestyle";
  };

  return (
    <div className="group relative block rounded-[2.5rem] overflow-hidden card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${getCategoryClass(category)} bg-opacity-80`}>
              {category}
            </span>
          </div>

          <div>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight mb-2">
              {title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
