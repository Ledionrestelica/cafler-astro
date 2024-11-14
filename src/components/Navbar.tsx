import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "../assets/icons/logo.svg";
import menu from "../assets/icons/menu.svg";
import search from "../assets/icons/search.svg";
import shoppingCart from "../assets/icons/shoppingCart.svg";
import arrow from "../assets/icons/arrow.svg";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";
import { isCartOpen, cartItems } from "@/shared/cart";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      id="navbar"
      className="bg-secondary relative text-white extraBold py-[30px] z-20 border-b border-[#3C4043]"
    >
      <div
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? "" : "hidden"} inset-0 z-[-1] h-screen w-full overflow-clip bg-secondary opacity-80 absolute`}
      ></div>
      <div
        className={`${isOpen ? "h-20" : "h-0"} absolute z-10 top-[100%] overflow-hidden right-0 left-0 bg-secondary transition-all duration-300 border-y border-[#3C4043]`}
      >
        <div className="mx-auto max-w-[1440px] flex px-4 py-2">Hello guys</div>
      </div>
      <div className="max-w-[1440px] px-4 flex justify-between items-center mx-auto">
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <img src={menu.src} alt="menu" width={30} height={30} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>
              <h1 className="text-2xl">Menu</h1>
            </SheetTitle>
          </SheetContent>
        </Sheet>
        <a aria-label="Back to home" href="/">
          <img
            alt="Cafler Covers Logo"
            width={120}
            height={40}
            src={logo.src}
            style={{ width: "auto", height: "auto" }}
          />
        </a>

        <div className="gap-8 items-center hidden md:flex">
          <p
            style={{ userSelect: "none" }}
            className="uppercase cursor-pointer flex items-center gap-2 extrabold"
          >
            Car Covers
            <span>
              <img
                src={arrow.src}
                alt="arrow"
                width={15}
                height={15}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
          </p>
          <p
            onClick={() => setIsOpen((prev) => !prev)}
            style={{ userSelect: "none" }}
            className="uppercase cursor-pointer flex items-center gap-2 extrabold"
          >
            Car Covers{" "}
            <span>
              <img
                src={arrow.src}
                alt="arrow"
                width={15}
                height={15}
                style={{ width: "auto", height: "auto" }}
              ></img>
            </span>
          </p>
          <a href="/find-cover">
            <p
              style={{ userSelect: "none" }}
              className="uppercase cursor-pointer text-[var(--color-blue-100)] extrabold"
            >
              Find your car cover
            </p>
          </a>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger>
              <img src={search.src} width={24} height={24} alt="search"></img>
            </DialogTrigger>
            <DialogContent>
              <DialogDescription>Search For a Cover</DialogDescription>
              <DialogHeader>Search</DialogHeader>
            </DialogContent>
          </Dialog>
          <Sheet>
            <SheetTrigger>
              <img
                src={shoppingCart.src}
                style={{ width: "auto", height: "auto" }}
                alt="Cart"
                width={24}
                height={24}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>
                <h1 className="text-2xl black">YOUR CART</h1>
              </SheetTitle>
              <SheetDescription>
                <p className="regular text-[16px]">
                  Free shipping for any orders above $100.00
                </p>
              </SheetDescription>
              <div className="pt-8 space-y-3 overflow-y-scroll">
                {Object.values($cartItems).length ? (
                  <div className="space-y-3">
                    {Object.values($cartItems).map((cartItem) => (
                      <div className="flex gap-2 h-[110px]">
                        <div className="border aspect-square w-[100px] border-stroke">
                          <img
                            className="aspect-square"
                            src={cartItem.imageSrc}
                            alt={cartItem.title}
                          />
                        </div>
                        <div className="flex flex-col flex-1 justify-between w-full">
                          <h3 className="semibold text-lg ">
                            {cartItem.title}
                          </h3>
                          <div className="flex justify-between w-full">
                            <div className="flex border w-[80px] border-stroke">
                              <button className="flex-1">-</button>
                              <span className="flex-1 text-center regular">
                                {cartItem.quantity}
                              </span>
                              <button className="flex-1">+</button>
                            </div>
                            <p className="semibold text-[18px]">
                              ${cartItem.totalPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Your cart is empty!</p>
                )}
              </div>
              <SheetFooter>
                <button>Order now</button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
