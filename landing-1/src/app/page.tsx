import Banner from "@/components/containers/banner";
import ContactCard from "@/components/containers/contactCard";
import FeatureCard from "@/components/containers/featureCard";
import FeatureCarousel from "@/components/containers/featureCarousal";
import Hero from "@/components/containers/hero";
import Testimonials from "@/components/containers/testimonials";

const SHOWCASE_FEATURES = [
  {
    title: "Built in user authentication system",
    subtitle: "User Authentication",
    navigateTo: "#",
    desc: "Nextbase supports a wide range of authentication providers such as Google, GitHub, Twitter, Facebook, Apple, Discord and many more. It also provides the flexibility for users to sign in with their email and password or even just with their email. The built-in functionality includes features like forgot password and updating email, making it a comprehensive user authentication system.",
    imgSrc:
      "https://res.cloudinary.com/dkqrmlxlg/video/upload/v1702921481/usenextbase/tinywow_signup_43386486_t9iuny.webm",
  },
  {
    title: "Built in Admin Panel",
    subtitle: "Admin Panel",
    navigateTo: "#",
    desc: "Nextbase comes with a built-in admin panel that allows you to have a secret area within your app where you can manage users, teams, organizations and more. It provides a comprehensive and intuitive interface for managing all aspects of your application, from users to projects and organizations. This feature is designed to make administrative tasks easier and more efficient.",
    imgSrc:
      "https://res.cloudinary.com/dkqrmlxlg/video/upload/v1702915076/usenextbase/tinywow_admin-panel-gif_43379830_tltcqi.webm",
  },
  {
    title: "Built in user authentication system",
    subtitle: "User Impersonation",
    navigateTo: "#",
    desc: "Nextbase supports a wide range of authentication providers such as Google, GitHub, Twitter, Facebook, Apple, Discord and many more. It also provides the flexibility for users to sign in with their email and password or even just with their email. The built-in functionality includes features like forgot password and updating email, making it a comprehensive user authentication system.",
    imgSrc:
      "https://res.cloudinary.com/dkqrmlxlg/video/upload/v1702921499/usenextbase/tinywow_user-imp_43386586_xpo6pr.webm",
  },
  {
    title: "Built in user authentication system",
    subtitle: "Stripe Payments",
    navigateTo: "#",
    desc: "Nextbase supports a wide range of authentication providers such as Google, GitHub, Twitter, Facebook, Apple, Discord and many more. It also provides the flexibility for users to sign in with their email and password or even just with their email. The built-in functionality includes features like forgot password and updating email, making it a comprehensive user authentication system.",
    imgSrc:
      "https://res.cloudinary.com/dkqrmlxlg/video/upload/v1702916692/usenextbase/tinywow_stripe-payments-gif_43381706_by2uhy.webm",
  },
  {
    title: "Built in user authentication system",
    subtitle: "Stripe Payments",
    navigateTo: "#",
    desc: "Nextbase supports a wide range of authentication providers such as Google, GitHub, Twitter, Facebook, Apple, Discord and many more. It also provides the flexibility for users to sign in with their email and password or even just with their email. The built-in functionality includes features like forgot password and updating email, making it a comprehensive user authentication system.",
    imgSrc:
      "https://res.cloudinary.com/dkqrmlxlg/video/upload/v1702916692/usenextbase/tinywow_stripe-payments-gif_43381706_by2uhy.webm",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Banner />
      <Testimonials />
      <div className="w-full flex flex-col ">
        {SHOWCASE_FEATURES?.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
      <h2 className="text-2xl text-foreground flex justify-center items-center text-center pb-4 font-bold tracking-tighter sm:text-4xl md:text-3xl mb-10">
        Everything else you need
      </h2>
      <FeatureCarousel />
      <ContactCard />
    </main>
  );
}
