import { Flame } from "lucide-react";

const PriorityIcons = ({ priority }) => {
  return (
    <div className="flex gap-1">
      <Flame
        className={`w-4 h-4 ${
          priority > 0 ? "text-red-600" : "text-slate-400"
        }`}
      />
      <Flame
        className={`w-4 h-4 ${
          priority > 1 ? "text-red-600" : "text-slate-400"
        }`}
      />
      <Flame
        className={`w-4 h-4 ${
          priority > 2 ? "text-red-600" : "text-slate-400"
        }`}
      />
      <Flame
        className={`w-4 h-4 ${
          priority > 3 ? "text-red-600" : "text-slate-400"
        }`}
      />
      <Flame
        className={`w-4 h-4 ${
          priority > 4 ? "text-red-600" : "text-slate-400"
        }`}
      />
    </div>
  );
};

export default PriorityIcons;
