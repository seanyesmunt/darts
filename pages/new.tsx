import React from "react";
import Page from "../component/page";
import Router, { useRouter } from "next/router";

interface Props {}

export default function NewGame(props: Props) {
  const router = useRouter();
  const [name, setName] = React.useState<string>("");

  function handleCreateGame(e) {
    e.preventDefault();
    if (name) {
      router.push(`/setup?name=${name}`);
    }
  }

  return (
    <Page>
      <main className=" flex flex-1 items-center justify-center text-white p-8">
        <div>
          <form onSubmit={handleCreateGame}>
            <label className="text-white">Your Name</label>
            <input
              autoComplete="off"
              autoFocus
              className="block w-full shadow appearance-none border h-24 md:h-40 text-4xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Kenny Powers"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="flex flex-col md:flex-row mt-10 pb-24 text-center">
              <button
                type="submit"
                className="mr-4 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow"
              >
                Create Game
              </button>
              <button
                onClick={() => Router.back()}
                className="mt-4 md:mt-0 w-full md:w-auto text-2xl bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg shadow"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </Page>
  );
}
