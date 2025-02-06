"use client"
import Image from "next/image";
import Navbar from "./Navbar";
import Card from "./Card";
import Grid from "./Grid";
import Blog from "./Blog";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div>
      <Card/>
      <Grid/>
      <Navbar/>
      <Blog/>
      <Dashboard/>
    </div>
  );
}
