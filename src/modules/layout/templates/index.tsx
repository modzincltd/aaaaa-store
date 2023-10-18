import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import {NextUIProvider} from "@nextui-org/react";

const Layout: React.FC = ({ children }) => {
  return (
    <NextUIProvider>
      <Nav />
          <main className="relative">{children}</main>
      
      <Footer />
    </NextUIProvider>

  )
}

export default Layout
