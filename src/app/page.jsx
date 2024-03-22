import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Player from "@/components/Player";
import Albums from "@/components/albums/Albums";
import Events from "@/components/events/Events";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <NewsLetter />
    </main>
  );
}
