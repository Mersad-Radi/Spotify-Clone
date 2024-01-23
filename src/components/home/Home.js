import React from "react";
import { Link } from "react-router-dom";
import { MusicCard } from "../music";

const Home = () => {
  return (
    <>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Popular</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Workout</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Happy</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Sad</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Chill</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Instrumentall</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Dinner</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
      <section className="mb-4">
        <div className="flex justify-between mb-4">
          <p className=" text-2xl text-white">Mood</p>
          <Link className=" hover:text-white transition duration-200">
            <p className=" text-sm">Show more</p>
          </Link>
        </div>
        <div className=" flex gap-6 flex-wrap">
          <Link to="/musicPage">
            <MusicCard />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
