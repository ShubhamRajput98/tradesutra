import { Outlet } from "react-router-dom";
import { Header } from "./components/common/header/Header";
import { Sidebar } from "./components/common/sidebar/Sidebar";
import { useState } from "react";

export default function App() {
  let [showModal, setShowModal] = useState(false);

  return (
    <main className="w-screen h-screen flex flex-col overflow-hidden">
      {/* Header  */}
      <Header />

      <section className="h-full w-full flex flex-1 overflow-hidden">
        <Sidebar />

        <Outlet />
      </section>

      {showModal && <Modal />}
    </main>
  );
}
