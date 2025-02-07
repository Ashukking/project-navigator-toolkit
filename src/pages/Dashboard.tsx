
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, FileText, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Attendance",
      value: "On Time",
      icon: Clock,
      color: "text-green-400",
    },
    {
      title: "Active Location",
      value: "Office",
      icon: MapPin,
      color: "text-blue-400",
    },
    {
      title: "Pending Quotations",
      value: "3",
      icon: FileText,
      color: "text-orange-400",
    },
    {
      title: "Active Projects",
      value: "8",
      icon: Users,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-morphism">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={cn("h-4 w-4", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
