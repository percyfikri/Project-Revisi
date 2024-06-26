import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/NavbarComponent";
import NavbarProfile from "./components/navbarProfile/navbarProfile";
import Footer from "./components/Footer/FooterComponent";
import SidebarBenefisari from "./components/ComponentSidebar/SidebarBenefisari";
import SidebarDonatur from "./components/ComponentSidebar/SidebarDonatur";
import LoginWithoutFooter from "./components/LoginWithoutFooter";

import ProfileBenefisari from "./pages/benefisariDashboard/Profile/ProfileBenefisari";
import ProfileDonatur from "./pages/donaturDashboard/Profile/ProfileDonatur";

import Register from "./pages/registerPage/register";
import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";

import Event from "./pages/eventPage/event";
import EventDetail1 from "./pages/eventPage/eventdetail1";
import EventDetail2 from "./pages/eventPage/eventdetail2";
import EventDetail3 from "./pages/eventPage/eventdetail3";

import Blog from "./pages/blogPage/blog";
import BlogDetail1 from "./pages/blogPage/blogdetail1";
import BlogDetail2 from "./pages/blogPage/blogdetail2";
import BlogDetail3 from "./pages/blogPage/blogdetail3";

import Pendidikan from "./pages/kategori/pendidikan";
import Bencana from "./pages/kategori/bencana";
import Kesehatan from "./pages/kategori/kesehatan";
import Sosial from "./pages/kategori/sosial";
import Teknologi from "./pages/kategori/teknologi";

import Zakat from "./pages/campaign/zakat";
import Qurban from "./pages/campaign/qurban";

import Berlangsung from "./pages/status/berlangsung";
import Diperpanjang from "./pages/status/diperpanjang";
import Selesai from "./pages/status/selesai";

import Berakhir from "./pages/diurutkan/berakhir";
import Populer from "./pages/diurutkan/populer";
import Terbaru from "./pages/diurutkan/terbaru";
import Terlama from "./pages/diurutkan/terlama";
import Mendesak from "./pages/diurutkan/mendesak";

import DetailPendidikan from "./pages/detailDonasi/detailPendidikan";
import DetailBencana from "./pages/detailDonasi/detailBencana";
import DetailKesehatan from "./pages/detailDonasi/detailKesehatan";
import DetailSosial from "./pages/detailDonasi/detailSosial";
import DetailTeknologi from "./pages/detailDonasi/detailTeknologi";
import DetailZakat from "./pages/detailDonasi/detailZakat";
import DetailQurban from "./pages/detailDonasi/detailQurban";

import PayDonasiUang from "./pages/paymentDonasi/payDonasiUang";
import PayDonasiBarang from "./pages/paymentDonasi/payDonasiBarang";

// dashboard donatur
import DashboardDonatur from "./pages/donaturDashboard/dashboardDonatur/dashboardDonatur";
import PelacakanDonatur from "./pages/donaturDashboard/pelacakanDonatur/pelacakanDonatur";
import RiwayatDonatur from "./pages/donaturDashboard/riwayatDonatur/riwayatDonatur";
import TransparansiDonatur from "./pages/donaturDashboard/transparansiDonatur/transparansiDonatur";

// dashboard benefisari
import DashboardBenefisari from "./pages/benefisariDashboard/dashboardBenefisari/dashboardBenefisari";
import ProgramKampanye from "./pages/benefisariDashboard/programKampanye/programKampanye";
import PelacakanBenefisari from "./pages/benefisariDashboard/pelacakanBenefisari/pelacakanBenefisari";
import TransparansiBenefisari from "./pages/benefisariDashboard/transparansiBenefisari/transparansiBenefisari";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isHomepage = location.pathname === "/";
  
  const isSidebar = [
    "/dashboardBenefisari",
    "/programKampanye",
    "/pelacakanBenefisari",
    "/transparansiBenefisari",
    "/ProfileBenefisari",
    "/changePasswordBenefisari",
    "/dashboardDonatur",
    "/pelacakanDonatur",
    "/riwayatDonatur",
    "/transparansiDonatur",
    "/ProfileDonatur",
    "/changePasswordDonatur"
  ].some(path => location.pathname.startsWith(path));

  const isNavbarProfilePages = [
    "/donasi",
    "/event",
    "/eventdetail1",
    "/eventdetail2",
    "/eventdetail3",
    "/blog",
    "/blogdetail1",
    "/blogdetail2",
    "/blogdetail3",
    "/pendidikan",
    "/bencana",
    "/kesehatan",
    "/sosial",
    "/teknologi",
    "/zakat",
    "/qurban",
    "/berlangsung",
    "/diperpanjang",
    "/selesai",
    "/berakhir",
    "/populer",
    "/terbaru",
    "/terlama",
    "/mendesak",
    "/detailPendidikan",
    "/detailBencana",
    "/detailKesehatan",
    "/detailSosial",
    "/detailTeknologi",
    "/detailZakat",
    "/detailQurban",
    "/payDonasiUang",
    "/payDonasiBarang"
  ].some(path => location.pathname.startsWith(path));

  return (
    <>
      {!isLoginPage && !isRegisterPage && !isSidebar && (
        isHomepage ? <Navbar /> : (isNavbarProfilePages && <NavbarProfile />)
      )}
      {isSidebar && (
        <>
          {location.pathname.startsWith("/dashboardBenefisari") ||
          location.pathname.startsWith("/programKampanye") ||
          location.pathname.startsWith("/transparansiBenefisari") ||
          location.pathname.startsWith("/pelacakanBenefisari") ? (
            <SidebarBenefisari />
          ) : (
            <SidebarDonatur />
          )}
        </>
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/event" element={<Event />} />
        <Route path="/eventdetail1" element={<EventDetail1 />} />
        <Route path="/eventdetail2" element={<EventDetail2 />} />
        <Route path="/eventdetail3" element={<EventDetail3 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail1" element={<BlogDetail1 />} />
        <Route path="/blogdetail2" element={<BlogDetail2 />} />
        <Route path="/blogdetail3" element={<BlogDetail3 />} />
        <Route path="/login" element={<LoginWithoutFooter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/bencana" element={<Bencana />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/qurban" element={<Qurban />} />
        <Route path="/berlangsung" element={<Berlangsung />} />
        <Route path="/diperpanjang" element={<Diperpanjang />} />
        <Route path="/selesai" element={<Selesai />} />
        <Route path="/berakhir" element={<Berakhir />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/terlama" element={<Terlama />} />
        <Route path="/mendesak" element={<Mendesak />} />
        <Route path="/detailpendidikan" element={<DetailPendidikan />} />
        <Route path="/detailbencana" element={<DetailBencana />} />
        <Route path="/detailkesehatan" element={<DetailKesehatan />} />
        <Route path="/detailsosial" element={<DetailSosial />} />
        <Route path="/detailteknologi" element={<DetailTeknologi />} />
        <Route path="/detailzakat" element={<DetailZakat />} />
        <Route path="/detailqurban" element={<DetailQurban />} />
        <Route path="/paydonasiuang" element={<PayDonasiUang />} />
        <Route path="/paydonasibarang" element={<PayDonasiBarang />} />
        {/* dashboard donatur */}
        <Route path="/dashboardDonatur" element={<DashboardDonatur />} />
        <Route path="/pelacakanDonatur" element={<PelacakanDonatur />} />
        <Route path="/riwayatDonatur" element={<RiwayatDonatur />} />
        <Route path="/transparansiDonatur" element={<TransparansiDonatur />} />
        {/* dashboard Benefisari */}
        <Route path="/dashboardBenefisari" element={<DashboardBenefisari />} />
        <Route path="/programKampanye" element={<ProgramKampanye />} />
        <Route path="/pelacakanBenefisari" element={<PelacakanBenefisari />} />
        <Route path="/transparansiBenefisari" element={<TransparansiBenefisari />} />
        <Route path="/ProfileBenefisari" element={<ProfileBenefisari />} />
        <Route path="/ProfileDonatur" element={<ProfileDonatur />} />
      </Routes>
      {!isLoginPage && !isRegisterPage && !isSidebar && <Footer />}
    </>
  );
}

export default App;
