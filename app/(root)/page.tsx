import SearchForm from "@/components/SearchForm";

function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm />
      </section>
      <section className="section_container">
        
      </section>
    </>
  );
}

export default Home;
