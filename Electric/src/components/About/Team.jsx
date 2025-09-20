const teamMembers = [
  {
    name: "Dr. Anya Sharma",
    role: "CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdY7Ywloq_QYSrACHBGbahMK5X7R9Nw9lBRZt4f2QtxP2V3Br4Muxri5BbFB_Smx6xn-It1sB-CK_l9ukdFUxa5kf2aj9y5kdNJECzJLM8YKPfhcbEQhaq-zEInODSGfeVSyJX_YcUUafqXaG5OyXWuLNyTxhnl6EeVrrtFAgtRqrcGqW0VsNBy2hIZGzbpIQrJ5fqrttSQiz-FXT-QvVLMWbWJMD0bhhZI0JS_VwSbYI8_BiHQqv_OdjN_cpcebZ3igVeY-3gETzM",
    desc: "Leads the company's strategic direction and growth, with a background in sustainable technology and business management.",
  },
  {
    name: "Nikhil Jindal",
    role: "CTO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtyj1Sf_UsrFO8yfJnVb-yzNXCMmcSXglQVAI1Uw2VhMvdQtwEpIazCibloqzh4OSp08j-TL8VIO-xqEeT1ElWK1eAjtzAENi9l7jwKHgsHpjOgcEQoQOvSQlx-CMNXeDoU1EYg6KztgF5MCfgmZkZ2QE_AU6GRWXqxtLQ9GdeLcft1U6odEPmk1sC_kRheZp_DoykCnENDVHOoccVqtLWdFGnPc7I6zuSMmQlaaxopxmn3oCQTW128Uf6YwQ0IFX50ulGDCZoeRUx",
    desc: "Oversees all technological developments, including vehicle engineering, software, and energy solutions.",
  },
  {
    name: "Olivia Bennett",
    role: "Head of Design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCrNl2_B7scZDyWNRSfGi0Oy-K9e6qLKPvPj-BW3U1L_0lvGd3ml2EvU-GspUqXixcGRNW8fvVeh7AhAX39o3M4rR0r9B0RN1xi2s5l9cFF-Be4FJrekIVzc-w4tYJI8RPLmtuv34jtH7fD92Da1syJhpuAmCDj2ig1hRUItNfXQv8rQkH5v8OrEOYAzDwxPK_TM-pI354lahkzbU0xcZMqPA8lShhFZZh2uLBEc2yvk2vJZVd5A5hMDHN3zxs4pbpiLVLZ4QJ0bAe",
    desc: "Manages the design team, ensuring Electra vehicles are functional, aesthetic, and user-friendly.",
  },
];



export default function Team() {
  return (
    <section className="space-y-8">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#13ec5b] font-bold mb-8">
        Meet the Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center gap-4 text-center px-4 sm:px-2">
            <div
              className="h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
            <p className="text-sm sm:text-base font-medium text-primary">{member.role}</p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

