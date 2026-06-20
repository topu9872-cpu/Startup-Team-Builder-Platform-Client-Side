import Image from "next/image";
import { ProfileEditModalCollaborator } from "./ProfileEditModal/ProfileEditModal";

export default function ProfileCard({ user }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md">
        {/* Image */}
        <div className="flex justify-center">
          {user?.image ? (
            <Image
              width={160}
              height={160}
              src={user?.image}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
          ) : (
            <span className="loading loading-dots loading-sm"></span>
          )}
        </div>

        {/* Name */}
        <h2 className="text-center text-xl font-bold mt-4">{user?.name}</h2>

        {/* Skills */}
        <div className="flex text-gray-400 text-sm flex-wrap justify-center gap-2 mt-3">
          {user?.skills ? user?.skills : "Add Skills"}
        </div>

        {/* Bio */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          {user?.bio ? user?.bio : "Add bio"}
        </p>

        {/* Edit Button */}
        <div className="flex justify-center mt-5">
          <ProfileEditModalCollaborator user={user} />
        </div>
      </div>
    </div>
  );
}
