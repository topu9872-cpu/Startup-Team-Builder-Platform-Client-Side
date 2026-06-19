import { ProfileEditModal } from "../ProfileEditModal/ProfileEditModal";

export default function ProfileCardFounder() {
  return (
     <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
        </div>

        {/* Name */}
        <h2 className="text-center text-xl font-bold mt-4">
          John Doe
        </h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-primary">Next.js</span>
          <span className="badge badge-primary">Node.js</span>
          <span className="badge badge-primary">MongoDB</span>
        </div>

        {/* Bio */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          Passionate full-stack developer who loves building scalable web apps and clean UI experiences.
        </p>

        {/* Edit Button */}
        <div className="flex justify-center mt-5">
          <ProfileEditModal/>
        </div>

      </div>
    </div>
  );
}