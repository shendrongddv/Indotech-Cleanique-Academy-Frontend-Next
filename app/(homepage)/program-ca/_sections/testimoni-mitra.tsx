import { contentTestimoniMitra } from "@/config/cleanique-academy";
import { Star } from "lucide-react";

const TestimoniMitra = () => {
  const testimonies = contentTestimoniMitra;
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
      {testimonies?.slice(0, 2).map((item) => (
        <div key={item.id} className="space-y-6 bg-slate-100 rounded-md p-6">
          <div className="flex items-center gap-2 text-primary">
            <Star className="h-4 w-4" />
            <Star className="h-4 w-4" />
            <Star className="h-4 w-4" />
            <Star className="h-4 w-4" />
            <Star className="h-4 w-4" />
          </div>
          <blockquote>
            <p className="md:text-lg ">{item.review}</p>
          </blockquote>

          <div className="flex flex-col text-start">
            <span className="font-medium">{item.name}</span>
            <span className="text-muted-foreground">{item.address}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimoniMitra;
