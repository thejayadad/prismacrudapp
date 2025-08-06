



const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-12">
        <div className="col-span-1 row-span-1  flex items-center px-4 border-b border-neutral-100 border-dotted">
            HEADER
        </div>
        <main className="col-span-1 row-span-10 px-4">
            {children}
        </main>
        <footer className="col-span-1 row-span-1  flex items-center px-4 border-t border-neutral-100 border-dotted">
            Footer
        </footer>
    </div>
  )
}

export default layout