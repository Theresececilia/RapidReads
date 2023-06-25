import Heading from "@components/heading";
import { Ghost } from 'lucide-react'

export default function About() {
  return (
    <section className=" text-darkColor flex p-2 md:p12">
      <div className="border-2 border-black bg-lightColor">
        <h1 className="text-4xl text-darkColor p-4 text-left">About</h1>
        <p className="border-t-2 border-black p-4 ">
          {' '}
          Welcome to Rapid Reads, your go-to destination for fast-paced and
          captivating short stories.
          <br /> We believe that great storytelling doesn't always have to be
          lengthy. In a world where time is precious, we've curated a collection
          of bite-sized tales that will leave you wanting more.
          <br />
          At Rapid Reads, we understand the power of a well-crafted story that
          can transport you to different worlds, evoke emotions, and spark your
          imagination. Our team of talented writers and storytellers are
          dedicated to delivering impactful narratives in a concise format.
          <br />
          Whether you're looking for a quick escape during a lunch break, a
          compelling read before bedtime, or simply crave an immersive story
          that can be enjoyed in minutes, Rapid Reads has got you covered.
          <br />
          Explore our diverse range of genres and discover stories that will
          surprise, entertain, and leave you with a lasting impression. We're
          committed to providing you with an exceptional reading experience that
          fits seamlessly into your busy lifestyle.
          <br />
          Join our community of avid readers and embrace the thrill of rapid
          storytelling. Get ready to dive into an ever-growing collection of
          short stories that will captivate your mind and ignite your
          imagination.
        </p>
      </div>
      <div className=" flex flex-col justify-between border-y-2 border-r-2 border-black p-4 bg-lightColor">
        <h3 className="md:text-xl text-accentPurple pt-8 pl-2 ">
          H
          <br />A
          <br />P
          <br />P
          <br />Y
          <br />
          <br />R
          <br />E
          <br />A
          <br />D
          <br />I
          <br />N
          <br />G
        </h3>
        <Ghost color="#9377FF" size={24} />
      </div>
    </section>
  );
}
