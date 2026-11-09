import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";
export default function ProfileFormsPage() {
  return (
    <div id="wd-lab4-profile-forms" className="grid gap-8 p-4 lg:grid-cols-3">
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}
