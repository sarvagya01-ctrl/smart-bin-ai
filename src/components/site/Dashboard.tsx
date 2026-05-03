import dashboardImg from "@/assets/dashboard-preview.jpg";
import { Activity, MapPin, TrendingDown, Users } from "lucide-react";
import { InteractiveDashboard } from "./InteractiveDashboard";
import { Reveal } from "./Reveal";
import { useState } from "react";
export const Dashboard = () => {
  const [hospitals, setHospitals] = useState<any[]>([]);

const findHospitals = async () => {
  try {
    const response = await fetch("https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:77.5162544,28.4654175,5000&bias=proximity:77.5162544,28.4654175&limit=20&apiKey=d7b8eb0beec64a7591dc4dd095c5af43");
    const data = await response.json();
    setHospitals(data.features);
  } catch (error) {
    console.error("Error fetching hospitals:", error);
  }
};
  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Live Dashboard
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Operate your fleet from{" "}
              <span className="text-gradient">one command center</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Monitor every bin in real time. Predict overflows. Optimize routes
              with data-driven insights pulled straight from the field.
            </p>
            <button
  onClick={findHospitals}
  className="bg-primary text-white px-6 py-3 rounded-xl font-semibold mb-6"
>
  Find Nearby Hospitals
</button>
           <ul className="space-y-2">
  {hospitals.map((hospital, index) => (
    <li key={index} className="border rounded-lg p-4">
      <strong>{hospital.properties.name}</strong>

      <p>{hospital.properties.formatted}</p>

      <p>
        Distance:{" "}
        {hospital.properties.distance
          ? `${(hospital.properties.distance / 1000).toFixed(2)} km`
          : "N/A"}
      </p>
    </li>
  ))}
</ul>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Activity, label: "Real-time telemetry" },
                { icon: MapPin, label: "Geo-tagged bin map" },
                { icon: TrendingDown, label: "Predictive alerts" },
                { icon: Users, label: "User leaderboards" },
              ].map((i) => (
                <div
                  key={i.label}
                  className="flex items-center gap-3 glass rounded-xl p-3"
                >
                  <i.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{i.label}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full" />
              <img
                src={dashboardImg}
                alt="SmartBin AI dashboard preview"
                width={1536}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl w-full h-auto glass p-2"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <InteractiveDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
