"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProviders, signOut, SignIn, useSession } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  const [toogleDropdown, setToogleDropdown] = useState(false);
  return (
    <nav className="mb-16 flex-between w-full pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptAI</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Criar Postagem
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sair
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  key={provider.name}
                  onClick={SignIn(provider.id)}
                  type="button"
                >
                  Logar
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
            <div className="flex">
                <Image
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
                onClick={() => {setToogleDropdown((prev) => !prev)}}
              />
              {toogleDropdown && (
                  <div className="dropdown">
                    <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                    >
                    Meu Perfil
                    </Link>
                    <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                    >
                    Criar Prompt
                    </Link>
                    <button
                    type="button"       
                    onClick={() => {setToogleDropdown(false); signOut();}}
                    className="mt-5 w-full black_btn"
                    >
                        Sair

                    </button>

                  </div>
              )}
            </div>
        ) : (
            <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  key={provider.name}
                  onClick={SignIn(provider.id)}
                  type="button"
                >
                  Logar
                </button>
              ))}
          </>
        )}

      </div>
    </nav>
  );
};

export default Nav;
