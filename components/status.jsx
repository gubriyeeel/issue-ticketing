import { Badge } from "@/components/ui/badge";

const Status = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700"

    switch (status.toLowerCase()) {
      case 'closed':
        color = "bg-green-500 text-white"
        return color;
      case 'in progress':
        color = "bg-yellow-300 text-black"
        return color;
      case 'open':
        color = "bg-red-600 text-white"
        return color;
    }

    return color;
  }

  return (
    <Badge variant="default" className={`uppercase font-medium ${getColor(status)}`}>{status}</Badge>
  )
}

export default Status