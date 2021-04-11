import React from "react";
import Title from "../title/Title";

export default function Home() {
  return (
    <main className="main bg-gray-200 p-5">
      <section className="section">
        <div className="section-title mb-8">
          <h2 className="text-normal tracking-widest text-3xl text-center mb-2">
            My Project
          </h2>
          <div className="w-24 h-1.5 bg-react m-auto"></div>
        </div>
        <div className="section-center flex justify-around flex-wrap">
          <a
            href="/counter"
            className="inline-block lg:flex-0030 md:flex-0040 sm:flex-0060 xs:flex-0060 xsm:flex-0080 mb-8 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <article>
              <div className="box-image-wrapper h-60 relative overflow-hidden rounded-t-md">
                <img
                  src="/images/my-counter.png"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <footer className="footer bg-white rounded-b-md p-5">
                <h5 className="text-gray-700 text-sm text-center tracking-widest">
                  Counter App
                </h5>
              </footer>
            </article>
          </a>
          <a
            href="/todolist"
            className="inline-block lg:flex-0030 md:flex-0040 sm:flex-0060 xs:flex-0060 xsm:flex-0080 mb-8 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <article>
              <div className="box-image-wrapper h-60 relative overflow-hidden rounded-t-md">
                <img
                  src="/images/my-todolist.png"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <footer className="footer bg-white rounded-b-md p-5">
                <h5 className="text-gray-700 text-sm text-center tracking-widest">
                  Todolist App
                </h5>
              </footer>
            </article>
          </a>
          <a
            href="/quote"
            className="inline-block lg:flex-0030 md:flex-0040 sm:flex-0060 xs:flex-0060 xsm:flex-0080 mb-8 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <article>
              <div className="box-image-wrapper h-60 relative overflow-hidden rounded-t-md">
                <img
                  src="https://www.linkpicture.com/q/meFull.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <footer className="footer bg-white rounded-b-md p-5">
                <h5 className="text-gray-700 text-sm text-center tracking-widest">
                  Quote Machine
                </h5>
              </footer>
            </article>
          </a>
          <a
            href="/caculator"
            className="inline-block lg:flex-0030 md:flex-0040 sm:flex-0060 xs:flex-0060 xsm:flex-0080 mb-8 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <article>
              <div className="box-image-wrapper h-60 relative overflow-hidden rounded-t-md">
                <img
                  src="https://www.linkpicture.com/q/meFull.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <footer className="footer bg-white rounded-b-md p-5">
                <h5 className="text-gray-700 text-sm text-center tracking-widest">
                  Caculator
                </h5>
              </footer>
            </article>
          </a>
        </div>
      </section>
    </main>
  );
}
