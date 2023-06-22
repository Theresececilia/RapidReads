import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";


export default function Navbar() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const navItems = {
    "/": {
      name: "Home",
    },
    "/about": {
      name: "About",
    },
    "/blog": {
      name: "Blog",
    },
    "/create-post": {
      name: "Create post",
      reqAuth: true
    },
    "/login": {
      name: "Login",
      reqAuth: false
    },
    "/logout": {
      name: "Logout",
      reqAuth: true,
      onClick: async () => {
        await supabaseClient.auth.signOut()
        router.push("/login")
      }
    }
  };

  return (
    <aside>
      <div>
        <nav id="nav">
          <div>
            {Object.entries(navItems).map(([path, { name, reqAuth, onClick }]) => {
              const isActive = path === pathname;

              if ((reqAuth && !user) || (path === "/login" && user )) {
                return null
              }

              if ( path === "/logout") {
                return (
                  <button 
                  key={path} 
                  onClick={onClick}
                  >
                    Sign out
                    </button>
                )
              }
              return (
                <Link
                  key={path}
                  href={path}
                >
                  <span>{name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
