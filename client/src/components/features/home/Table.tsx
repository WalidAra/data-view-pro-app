import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./database/SideBar";

const Table = () => {
  const { table } = useParams();

  return (
    <main className="w-full flex-1 p-4 bg-background flex">
      <SideBar />
      <section className="px-2 w-full h-main flex-1 overflow-auto">
        <div className="inline-flex border-border w-full">
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Id
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Username
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Email
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Password
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Picture
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            Bio
          </div>
          <div className="px-2 py-1 bg-muted border font-medium w-60 shrink-0 ">
            CreateAt
          </div>
        </div>

        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>

        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              cffc4df8-d37b-4f48-a132-84ec9d14648d
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">Ezio</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">arawalid90@gmail.com</p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1">
              dsf;ljkeiofhjndiuwsbfnipudsbncviudsbnfiudh
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 text-blue-500">
              https://i.pinimg.com/736x/cb/2d/a9/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">
              🤖Born to stand out, not to fit in 🤖
            </p>
          </div>
          <div className="px-2 py-1 border border-t-0 border-border w-60 shrink-0">
            <p className="w-full line-clamp-1 ">05/20/2024</p>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Table;
