import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {FaRegEnvelope} from "react-icons/fa"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>iDraw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl">
          <div className="p-5 font-bold text-left">iDraw</div>
          <div className="py-10">
            <h2 className=" text-3xl font-bold  text-green-500 mb-2">
              Login or signup to your account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <p className="text-gray-400 my-3">Use email to login or signup</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <FaRegEnvelope className="text-gray-400 m-2"/>
              <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
              <div className="flex w-64 my-2">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" /> Remember me
                </label>
              </div>
              <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"> Sign in </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
