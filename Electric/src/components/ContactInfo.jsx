import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="text-gray-600 dark:text-gray-400 space-y-3">
        <h2 className="mr-0 text-2xl font-bold px-0 flex text-white mb-5">Contact Information</h2>
  <p className="flex items-center gap-2">
    <FaPhoneAlt className="text-primary" />
    <span className="font-semibold">Phone:</span>
    <span>6396979598</span>
  </p>
  <p className="flex items-center gap-2">
    <FaEnvelope className="text-primary" />
    <span className="font-semibold">Email:</span>
    <span>2341052@sliet.ac.in</span>
  </p>
  <p className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-primary" />
    <span className="font-semibold">Address:</span>
    <span>SLIET Longowal, Sangrur, Punjab</span>
  </p>
</div>

  );
}
