import { getProfile } from "@/lib/actions";

const ProfilePage = async () => {
  const res = await getProfile();
  return (
    <div>
      <h1>Profile page</h1>
      <p>{JSON.stringify(res)}</p>
    </div>
  );
};

export default ProfilePage;
