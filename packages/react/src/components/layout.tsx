import React from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen flex flex-row m-0 p-0">{children}</div>
  )
}

export function Sidebar(props: { children: React.ReactNode }) {
  return (
    <aside className="bg-zinc-300/40 thin-scrollbar overflow-y-auto sticky top-0 h-full hidden border-r sm:block w-64 xl:w-80">
      <nav className="p-4">{props.children}</nav>
    </aside>
  )
}

export function Content(props: { children: React.ReactNode }) {
  return (
    <main className="bg-zinc-50 flex-1 w-full overflow-y-auto flex flex-col gap-10">
      {props.children}
    </main>
  )
}
