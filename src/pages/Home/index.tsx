import ProfilePicture from "../../assets/profile-picture.jpg";

const Home = () => {
  return (
    <div>
      <section className="min-h-[calc(100vh-4rem)]">
        <img
          src={ProfilePicture}
          alt="profile-picture"
          loading="lazy"
          className="rounded-full h-24 w-24 grayscale mt-4"
        />
        <h1 className="font-bold text-3xl mt-8 italic">fuadmahmud.dev</h1>
        <h3 className="text-lg mt-4">Software Developer</h3>
        <p className="mt-4">Likes to solve problems and a life long learner.</p>
      </section>
      <section className="mt-28" id="about">
        <div className="flex flex-row items-center mb-4">
          <span className="mr-4">About</span>
          <div className="w-full bg-gray-300 h-px" />
        </div>
        <span className="font-bold">Hi there! Welcome 👋</span>
        <p className="mt-4">
          Let me introduce my self, I'm Fuad Mahmud a Software
          Developer/Engineer or whatever you like to named it, based in Jakarta
          Indonesia.
        </p>
      </section>
      <section className="my-48" id="works">
        <div className="flex flex-row items-center mb-4">
          <div className="w-full bg-gray-300 h-px" />
          <span className="ml-4">Project and Experience</span>
        </div>
        <p>
          Sorry. Currently nothing here to show, wait for me to gather my works
          or be my first client 🥰
        </p>
      </section>
    </div>
  );
};

export default Home;
